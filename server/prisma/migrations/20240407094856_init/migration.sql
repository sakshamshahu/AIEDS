/*
  Warnings:

  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `sessionId` on the `Session` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sessionid]` on the table `Session` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sessionid` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" DROP CONSTRAINT "Session_pkey",
DROP COLUMN "sessionId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "sessionid" TEXT NOT NULL,
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionid_key" ON "Session"("sessionid");
