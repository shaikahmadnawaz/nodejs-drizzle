import { Request, Response } from "express";

import { db } from "../db";
import { goldStoreTable, orderTable } from "../db/schema";
import { eq } from "drizzle-orm";

export const addOrder = async (req: Request, res: Response) => {
  try {
    const { goldStoreId, quantity, totalPrice } = req.body;
    const newOrder = {
      goldStoreId,
      quantity,
      totalPrice,
      orderDate: new Date(),
    };

    await db.insert(orderTable).values(newOrder);
    res.status(201).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await db.select().from(orderTable);
    res.status(200).json({ orders, message: "Orders retrieved successfully!" });
  } catch (error) {
    console.error("Error retrieving orders:", error);
    res.status(500).json({ error: "Failed to retrieve orders" });
  }
};

export const getOrderById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const order = await db
      .select()
      .from(orderTable)
      .where(eq(orderTable.id, parseInt(id)));

    if (order.length === 0) {
      res.status(404).json({ error: "Order not found" });
    }

    res
      .status(200)
      .json({ order: order[0], message: "Order retrieved successfully!" });
  } catch (error) {
    console.error("Error retrieving order by ID:", error);
    res.status(500).json({ error: "Failed to retrieve order" });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { quantity, totalPrice } = req.body;

    await db
      .update(orderTable)
      .set({ quantity, totalPrice })
      .where(eq(orderTable.id, parseInt(id)));

    res.status(200).json({ message: "Order updated successfully!" });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({ error: "Failed to update order" });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await db.delete(orderTable).where(eq(orderTable.id, parseInt(id)));

    res.status(200).json({ message: "Order deleted successfully!" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ error: "Failed to delete order" });
  }
};

export const placeOrder = async (req: Request, res: Response) => {
  try {
    const { goldStoreId, quantity } = req.body;

    const jewelryItem = await db
      .select()
      .from(goldStoreTable)
      .where(eq(goldStoreTable.id, goldStoreId));
    if (jewelryItem.length === 0) {
      res.status(404).json({ error: "Jewelry item not found" });
    }

    const totalPrice = (Number(jewelryItem[0].price) * quantity).toString();

    const newOrder = {
      goldStoreId,
      quantity,
      totalPrice,
    };

    await db.insert(orderTable).values(newOrder);
    res.status(201).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
};

export const getOrderDetailsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const orderDetails = await db
      .select({
        orderId: orderTable.id,
        orderDate: orderTable.orderDate,
        quantity: orderTable.quantity,
        totalPrice: orderTable.totalPrice,
        jewelryName: goldStoreTable.jewelryName,
        jewelryType: goldStoreTable.jewelryType,
        weight: goldStoreTable.weight,
        price: goldStoreTable.price,
      })
      .from(orderTable)
      .innerJoin(goldStoreTable, eq(orderTable.goldStoreId, goldStoreTable.id))
      .where(eq(orderTable.id, parseInt(id)));

    if (orderDetails.length === 0) {
      res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json({ order: orderDetails[0] });
  } catch (error) {
    console.error("Error retrieving order details:", error);
    res.status(500).json({ error: "Failed to retrieve order details" });
  }
};
