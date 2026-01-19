import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/shared/components/Header";

export const metadata: Metadata = {
  title: "Mon App PWA",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
