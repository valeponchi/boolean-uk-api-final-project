-- DropForeignKey
ALTER TABLE "Athlete" DROP CONSTRAINT "Athlete_categoryId_fkey1";

-- AddForeignKey
ALTER TABLE "Athlete" ADD FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
