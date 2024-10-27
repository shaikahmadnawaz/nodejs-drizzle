import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const goldStoreTable = pgTable("gold_store", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  jewelryName: varchar({ length: 255 }).notNull(),
  weight: integer().notNull(),
  price: integer().notNull(),
  createdAt: timestamp().notNull(),
  jewelryType: varchar({ length: 255 }).notNull(),
});
