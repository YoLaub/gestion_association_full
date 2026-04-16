/*
  Warnings:

  - You are about to drop the column `isWholeDay` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ActivityOrganizer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `createdById` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Activity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visibility` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Made the column `address` on table `Location` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_typeId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_activityId_fkey";

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_activityId_fkey";

-- DropForeignKey
ALTER TABLE "_ActivityOrganizer" DROP CONSTRAINT "_ActivityOrganizer_A_fkey";

-- DropForeignKey
ALTER TABLE "_ActivityOrganizer" DROP CONSTRAINT "_ActivityOrganizer_B_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "isWholeDay",
DROP COLUMN "locationId",
DROP COLUMN "typeId",
ADD COLUMN     "createdById" TEXT NOT NULL,
ADD COLUMN     "endTime" TIME,
ADD COLUMN     "eventTypeId" TEXT,
ADD COLUMN     "idResources" TEXT,
ADD COLUMN     "place" TEXT,
ADD COLUMN     "startTime" TIME,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "wholeDay" BOOLEAN,
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "startDate" SET DATA TYPE DATE,
ALTER COLUMN "endDate" DROP NOT NULL,
ALTER COLUMN "endDate" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "visibility",
ADD COLUMN     "visibility" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "address" SET NOT NULL;

-- DropTable
DROP TABLE "Course";

-- DropTable
DROP TABLE "_ActivityOrganizer";

-- CreateTable
CREATE TABLE "ActivityProfil" (
    "activityId" TEXT NOT NULL,
    "profilId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActivityProfil_pkey" PRIMARY KEY ("activityId","profilId")
);

-- CreateTable
CREATE TABLE "course" (
    "id" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "comment" TEXT,
    "activityId" TEXT NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tasks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "comment" TEXT,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProfilTasks" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProfilTasks_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ActivityLocation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ActivityLocation_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "course_activityId_key" ON "course"("activityId");

-- CreateIndex
CREATE INDEX "_ProfilTasks_B_index" ON "_ProfilTasks"("B");

-- CreateIndex
CREATE INDEX "_ActivityLocation_B_index" ON "_ActivityLocation"("B");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_eventTypeId_fkey" FOREIGN KEY ("eventTypeId") REFERENCES "EventType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityProfil" ADD CONSTRAINT "ActivityProfil_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityProfil" ADD CONSTRAINT "ActivityProfil_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course" ADD CONSTRAINT "course_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfilTasks" ADD CONSTRAINT "_ProfilTasks_A_fkey" FOREIGN KEY ("A") REFERENCES "Profil"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfilTasks" ADD CONSTRAINT "_ProfilTasks_B_fkey" FOREIGN KEY ("B") REFERENCES "Tasks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityLocation" ADD CONSTRAINT "_ActivityLocation_A_fkey" FOREIGN KEY ("A") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ActivityLocation" ADD CONSTRAINT "_ActivityLocation_B_fkey" FOREIGN KEY ("B") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
