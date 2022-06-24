 CREATE TABLE "cakes" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL,
	"price" numeric NOT NULL,
	"image" varchar NOT NULL,
	"description" TEXT NOT NULL,
	"flavourId" integer NOT NULL

);



CREATE TABLE "clients" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL,
	"address" varchar NOT NULL,
	"phone" varchar NOT NULL
);



CREATE TABLE "orders" (
	"id" serial NOT NULL,
	"clientId" integer NOT NULL,
	"cakeId" integer NOT NULL,
	"quantity" integer NOT NULL,
	"createdAt" timestamp with time zone NOT NULL DEFAULT 'NOW()',
	"totalPrice" numeric NOT NULL,
	"isDelivered" BOOLEAN NOT NULL DEFAULT 'false'
);



CREATE TABLE "flavours" (
	"id" serial NOT NULL,
	"name" varchar NOT NULL
);








