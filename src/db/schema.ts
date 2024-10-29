import {
  integer,
  pgTable,
  varchar,
  timestamp,
  decimal,
  boolean,
} from "drizzle-orm/pg-core";

export const goldStoreTable = pgTable("gold_store", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  jewelryName: varchar("jewelry_name", { length: 255 }).notNull(),
  weight: integer("weight").notNull(),
  price: decimal("price", {
    precision: 5,
    scale: 2,
  }).notNull(),
  available: boolean("available").notNull(),
  createdAt: timestamp("created_at").notNull(),
  jewelryType: varchar("jewelry_type", { length: 255 }).notNull(),
});

export const orderTable = pgTable("order", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  orderDate: timestamp("order_date").defaultNow(),
  quantity: integer("quantity").notNull(),
  totalPrice: decimal("total_price", { precision: 8, scale: 2 }).notNull(),
  goldStoreId: integer("gold_store_id")
    .notNull()
    .references(() => goldStoreTable.id, {
      onDelete: "cascade",
    }),
});
