import { Request, Response } from "express";
import { eq } from "drizzle-orm";

import { db } from "../db";
import { goldStoreTable } from "./../db/schema";

export const addGoldItem = async (req: Request, res: Response) => {
  try {
    const { jewelryName, weight, price, available, jewelryType } = req.body;
    const newItem = {
      jewelryName,
      weight,
      price,
      available,
      createdAt: new Date(),
      jewelryType,
    };

    await db.insert(goldStoreTable).values(newItem);
    res.status(201).json({ message: "New jewelry item added!" });
  } catch (error) {
    console.error("Error adding jewelry item:", error);
    res.status(500).json({ error: "Failed to add jewelry item" });
  }
};

export const getGoldItems = async (req: Request, res: Response) => {
  try {
    const items = await db.select().from(goldStoreTable);
    res.status(200).json({ items, message: "Jewelry items retrieved!" });
  } catch (error) {
    console.error("Error fetching jewelry items:", error);
    res.status(500).json({ error: "Failed to retrieve jewelry items" });
  }
};

export const updateGoldItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { jewelryName, weight, price, available, jewelryType } = req.body;

    await db
      .update(goldStoreTable)
      .set({
        jewelryName,
        weight,
        price,
        available,
        jewelryType,
      })
      .where(eq(goldStoreTable.id, parseInt(id)));

    res.status(200).json({ message: "Jewelry item updated successfully!" });
  } catch (error) {
    console.error("Error updating jewelry item:", error);
    res.status(500).json({ error: "Failed to update jewelry item" });
  }
};

export const deleteGoldItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await db.delete(goldStoreTable).where(eq(goldStoreTable.id, parseInt(id)));

    res.status(200).json({ message: "Jewelry item deleted successfully!" });
  } catch (error) {
    console.error("Error deleting jewelry item:", error);
    res.status(500).json({ error: "Failed to delete jewelry item" });
  }
};
