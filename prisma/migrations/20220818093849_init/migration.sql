-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "progress" INTEGER NOT NULL,
    "flag" BOOLEAN NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
