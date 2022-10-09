-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Suggestion', 'Planned', 'Progress', 'Live');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Feature', 'UI', 'UX', 'Enchancement', 'Bug');

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "category" "Category" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
