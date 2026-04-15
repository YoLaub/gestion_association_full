/*
  Warnings:

  - You are about to alter the column `title` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(120)`.
  - You are about to alter the column `idResources` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(180)`.
  - You are about to alter the column `createdById` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(180)`.
  - You are about to alter the column `eventTypeId` on the `Activity` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(180)`.
  - The primary key for the `ActivityProfil` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `activityId` on the `ActivityProfil` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(180)`.
  - You are about to alter the column `profilId` on the `ActivityProfil` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(180)`.
  - You are about to alter the column `status` on the `ActivityProfil` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `title` on the `Board` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(120)`.
  - You are about to alter the column `title` on the `Column` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(120)`.
  - You are about to alter the column `label` on the `EventType` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `colorCode` on the `EventType` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `title` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(120)`.
  - You are about to alter the column `status` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(40)`.
  - You are about to alter the column `level` on the `course` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_eventTypeId_fkey";

-- DropForeignKey
ALTER TABLE "ActivityProfil" DROP CONSTRAINT "ActivityProfil_activityId_fkey";

-- DropForeignKey
ALTER TABLE "ActivityProfil" DROP CONSTRAINT "ActivityProfil_profilId_fkey";

-- AlterTable
ALTER TABLE "Activity" ALTER COLUMN "title" SET DATA TYPE VARCHAR(120),
ALTER COLUMN "idResources" SET DATA TYPE VARCHAR(180),
ALTER COLUMN "createdById" SET DATA TYPE VARCHAR(180),
ALTER COLUMN "eventTypeId" SET DATA TYPE VARCHAR(180);

-- AlterTable
ALTER TABLE "ActivityProfil" DROP CONSTRAINT "ActivityProfil_pkey",
ALTER COLUMN "activityId" SET DATA TYPE VARCHAR(180),
ALTER COLUMN "profilId" SET DATA TYPE VARCHAR(180),
ALTER COLUMN "status" SET DATA TYPE VARCHAR(50),
ADD CONSTRAINT "ActivityProfil_pkey" PRIMARY KEY ("activityId", "profilId");

-- AlterTable
ALTER TABLE "Board" ALTER COLUMN "title" SET DATA TYPE VARCHAR(120);

-- AlterTable
ALTER TABLE "Column" ALTER COLUMN "title" SET DATA TYPE VARCHAR(120);

-- AlterTable
ALTER TABLE "EventType" ALTER COLUMN "label" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "colorCode" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "title" SET DATA TYPE VARCHAR(120),
ALTER COLUMN "status" SET DATA TYPE VARCHAR(40);

-- AlterTable
ALTER TABLE "course" ALTER COLUMN "level" SET DATA TYPE VARCHAR(30);

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_eventTypeId_fkey" FOREIGN KEY ("eventTypeId") REFERENCES "EventType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityProfil" ADD CONSTRAINT "ActivityProfil_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityProfil" ADD CONSTRAINT "ActivityProfil_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
