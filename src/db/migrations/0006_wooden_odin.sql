CREATE TABLE IF NOT EXISTS "order_table" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "order_table_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"order_date" timestamp DEFAULT now(),
	"quantity" integer NOT NULL,
	"total_price" numeric(8, 2) NOT NULL,
	"gold_store_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "gold_store" ADD COLUMN "jewelry_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "gold_store" ADD COLUMN "created_at" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "gold_store" ADD COLUMN "jewelry_type" varchar(255) NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order_table" ADD CONSTRAINT "order_table_gold_store_id_gold_store_id_fk" FOREIGN KEY ("gold_store_id") REFERENCES "public"."gold_store"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "gold_store" DROP COLUMN IF EXISTS "jewelryName";--> statement-breakpoint
ALTER TABLE "gold_store" DROP COLUMN IF EXISTS "createdAt";--> statement-breakpoint
ALTER TABLE "gold_store" DROP COLUMN IF EXISTS "jewelryType";