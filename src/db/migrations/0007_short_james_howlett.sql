ALTER TABLE "order_table" DROP CONSTRAINT "order_table_gold_store_id_gold_store_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "order_table" ADD CONSTRAINT "order_table_gold_store_id_gold_store_id_fk" FOREIGN KEY ("gold_store_id") REFERENCES "public"."gold_store"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
