import "reflect-metadata";
import type { Metadata, Viewport } from "next"; // 1. Importer Viewport
import "./globals.css";
import { BottomNav } from "@/app/components/layout/BottomNav";
import Header from "@/app/components/layout/Header";
import { ClerkProvider } from "@clerk/nextjs";

// 2. Définir le Viewport SÉPARÉMENT
export const viewport: Viewport = {
    themeColor: "#000000", // La couleur de la barre de notif mobile
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false, // Important pour l'effet "app native"
};

// 3. Nettoyer Metadata (plus de themeColor ici !)
export const metadata: Metadata = {
    title: "Gestion Association",
    description: "Application de gestion pour associations",
    manifest: "/manifest.webmanifest",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "GestAsso",
    },
};

export default function RootLayout({
        children,
    }: {
        children: React.ReactNode;
    }) {
        return (
            <ClerkProvider>
                <html lang="fr">
                    <body className="bg-slate-50">
                        <Header />
                        {children}

                        {/* 2. Ajouter la navigation en bas */}
                        <BottomNav />
                    </body>
                </html>
            </ClerkProvider>
        );
}