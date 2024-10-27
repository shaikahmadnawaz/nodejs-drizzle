import { goldStoreTable } from "./../db/schema";
import { Request, Response } from "express";

import { db } from "../db";

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
