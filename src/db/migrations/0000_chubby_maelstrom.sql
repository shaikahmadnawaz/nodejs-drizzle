CREATE TABLE IF NOT EXISTS "gold_store" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "gold_store_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"jewelryName" varchar(255) NOT NULL,
	"weight" integer NOT NULL,
	"price" integer NOT NULL,
	"createdAt" timestamp NOT NULL
);
