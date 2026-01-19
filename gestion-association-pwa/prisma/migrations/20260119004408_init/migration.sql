-- CreateTable
CREATE TABLE "Profil" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "birthday" TIMESTAMP(3),
    "phone" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "setInactiveAt" TIMESTAMP(3),
    "avatarUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "roleName" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InfoAdherent" (
    "id" TEXT NOT NULL,
    "medicalCertifDate" TIMESTAMP(3),
    "licenseNumber" TEXT,
    "licenseValidate" BOOLEAN NOT NULL DEFAULT false,
    "profilId" TEXT NOT NULL,

    CONSTRAINT "InfoAdherent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmergencyContact" (
    "id" TEXT NOT NULL,
    "emergencyContactName" TEXT NOT NULL,
    "emergencyContactPhone" TEXT NOT NULL,

    CONSTRAINT "EmergencyContact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "label" TEXT,
    "street" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "city" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProfilRoles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProfilRoles_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ProfilEmergencyContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProfilEmergencyContacts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ProfilAddresses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProfilAddresses_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profil_clerkId_key" ON "Profil"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "Profil_email_key" ON "Profil"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Role_roleName_key" ON "Role"("roleName");

-- CreateIndex
CREATE UNIQUE INDEX "InfoAdherent_licenseNumber_key" ON "InfoAdherent"("licenseNumber");

-- CreateIndex
CREATE UNIQUE INDEX "InfoAdherent_profilId_key" ON "InfoAdherent"("profilId");

-- CreateIndex
CREATE INDEX "_ProfilRoles_B_index" ON "_ProfilRoles"("B");

-- CreateIndex
CREATE INDEX "_ProfilEmergencyContacts_B_index" ON "_ProfilEmergencyContacts"("B");

-- CreateIndex
CREATE INDEX "_ProfilAddresses_B_index" ON "_ProfilAddresses"("B");

-- AddForeignKey
ALTER TABLE "InfoAdherent" ADD CONSTRAINT "InfoAdherent_profilId_fkey" FOREIGN KEY ("profilId") REFERENCES "Profil"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfilRoles" ADD CONSTRAINT "_ProfilRoles_A_fkey" FOREIGN KEY ("A") REFERENCES "Profil"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfilRoles" ADD CONSTRAINT "_ProfilRoles_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfilEmergencyContacts" ADD CONSTRAINT "_ProfilEmergencyContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "EmergencyContact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfilEmergencyContacts" ADD CONSTRAINT "_ProfilEmergencyContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Profil"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfilAddresses" ADD CONSTRAINT "_ProfilAddresses_A_fkey" FOREIGN KEY ("A") REFERENCES "Address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProfilAddresses" ADD CONSTRAINT "_ProfilAddresses_B_fkey" FOREIGN KEY ("B") REFERENCES "Profil"("id") ON DELETE CASCADE ON UPDATE CASCADE;
