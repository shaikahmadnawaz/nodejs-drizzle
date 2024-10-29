CREATE TABLE IF NOT EXISTS "order" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "order_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"order_date" timestamp DEFAULT now(),
	"quantity" integer NOT NULL,
	"total_price" numeric(8, 2) NOT NULL,
	"gold_store_id" integer NOT NULL
);
--> statement-breakpoint
DROP TABLE "order_table";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order" ADD CONSTRAINT "order_gold_store_id_gold_store_id_fk" FOREIGN KEY ("gold_store_id") REFERENCES "public"."gold_store"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
