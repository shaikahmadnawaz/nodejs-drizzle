ALTER TABLE "gold_store" ALTER COLUMN "price" SET DATA TYPE numeric(5, 2);--> statement-breakpoint
ALTER TABLE "gold_store" ADD COLUMN "available" boolean NOT NULL;