ALTER TABLE "gold_store" ADD COLUMN "jewelry_name" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "gold_store" ADD COLUMN "created_at" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "gold_store" ADD COLUMN "jewelry_type" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "gold_store" DROP COLUMN IF EXISTS "jewelryName";--> statement-breakpoint
ALTER TABLE "gold_store" DROP COLUMN IF EXISTS "createdAt";--> statement-breakpoint
ALTER TABLE "gold_store" DROP COLUMN IF EXISTS "jewelryType";