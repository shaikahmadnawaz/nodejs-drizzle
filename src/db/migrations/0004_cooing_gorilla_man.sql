CREATE TABLE IF NOT EXISTS "goldStore" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "goldStore_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"jewelryName" varchar(255) NOT NULL,
	"weight" integer NOT NULL,
	"price" numeric(5, 2) NOT NULL,
	"available" boolean NOT NULL,
	"createdAt" timestamp NOT NULL,
	"jewelryType" varchar(255) NOT NULL
);
--> statement-breakpoint
DROP TABLE "gold_store";