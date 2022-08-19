/*
  Warnings:

  - You are about to drop the `_ArticleToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `articles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ArticleToUser" DROP CONSTRAINT "_ArticleToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArticleToUser" DROP CONSTRAINT "_ArticleToUser_B_fkey";

-- DropTable
DROP TABLE "_ArticleToUser";

-- DropTable
DROP TABLE "articles";

-- CreateTable
CREATE TABLE "books" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookToUser_AB_unique" ON "_BookToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToUser_B_index" ON "_BookToUser"("B");

-- AddForeignKey
ALTER TABLE "_BookToUser" ADD CONSTRAINT "_BookToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "books"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToUser" ADD CONSTRAINT "_BookToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
