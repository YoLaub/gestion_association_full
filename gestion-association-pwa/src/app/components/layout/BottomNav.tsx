/**
 * BottomNav.tsx
 * Barre de navigation mobile fixe en bas de l'écran.
 */

"use client";

import React from 'react';
import {
    Home,
    Users,
    Plus,
    Wallet,
    Settings,
    type LucideIcon
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- SECTION À MODIFIER DANS VOTRE PROJET ---
// 1. Décommentez les deux lignes ci-dessous :
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// 2. Supprimez ou commentez les deux MOCKS ci-dessous (utilisés uniquement pour l'aperçu) :
const Link = ({ href, children, className, ...props }: any) => (
    <a href={href} className={className} {...props}>{children}</a>
);
const usePathname = () => "/"; // Simule que nous sommes sur la page d'accueil
// ---------------------------------------------

// Utilitaire pour fusionner les classes proprement
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface NavItem {
    label: string;
    href: string;
    icon: LucideIcon;
    isPrimary?: boolean;
}

export function BottomNav() {
    const pathname = usePathname();

    const navItems: NavItem[] = [
        { label: "Accueil", href: "/", icon: Home },
        { label: "Membres", href: "/members", icon: Users },
        { label: "Ajouter", href: "/add", icon: Plus, isPrimary: true }, // Le bouton central
        { label: "Finance", href: "/finance", icon: Wallet },
        { label: "Réglages", href: "/settings", icon: Settings },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 pb-safe-area-inset-bottom">
            {/* pb-safe-area-inset-bottom : Classe utilitaire pour gérer la barre home des iPhones.
          Assurez-vous d'avoir configuré le CSS global comme indiqué précédemment.
      */}

            <div className="flex justify-around items-center h-16 px-2 max-w-md mx-auto relative">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    // Rendu Spécial pour le bouton Central (+)
                    if (item.isPrimary) {
                        return (
                            <div key={item.href} className="relative -top-5">
                                <Link
                                    href={item.href}
                                    className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-200 active:scale-95 transition-transform hover:scale-105"
                                    aria-label={item.label}
                                >
                                    <Icon size={28} strokeWidth={2.5} />
                                </Link>
                            </div>
                        );
                    }

                    // Rendu des boutons standards
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors min-w-[60px]",
                                isActive
                                    ? "text-indigo-600"
                                    : "text-slate-400 hover:text-slate-600"
                            )}
                        >
                            <Icon
                                size={24}
                                strokeWidth={isActive ? 2.5 : 2}
                                className={cn("transition-transform duration-200", isActive && "scale-110")}
                            />
                            <span className="text-[10px] font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}