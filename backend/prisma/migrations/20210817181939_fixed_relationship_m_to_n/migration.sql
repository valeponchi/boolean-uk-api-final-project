/*
  Warnings:

  - You are about to drop the column `name` on the `Result` table. All the data in the column will be lost.
  - Added the required column `sex` to the `Athlete` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Athlete" ADD COLUMN     "sex" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Result" DROP COLUMN "name";
