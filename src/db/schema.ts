import {
  integer,
  pgTable,
  varchar,
  timestamp,
  decimal,
  boolean,
} from "drizzle-orm/pg-core";

export const goldStoreTable = pgTable("gold_store", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  jewelryName: varchar({ length: 255 }).notNull(),
  weight: integer().notNull(),
  price: decimal({
    precision: 5,
    scale: 2,
  }).notNull(),
  available: boolean().notNull(),
  createdAt: timestamp().notNull(),
  jewelryType: varchar({ length: 255 }).notNull(),
});
