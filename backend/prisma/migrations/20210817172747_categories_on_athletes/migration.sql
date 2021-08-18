/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Athlete` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Athlete" DROP CONSTRAINT "Athlete_categoryId_fkey";

-- AlterTable
ALTER TABLE "Athlete" DROP COLUMN "categoryId";

-- CreateTable
CREATE TABLE "CategoriesOnAthletes" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "athleteId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoriesOnAthletes" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnAthletes" ADD FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
