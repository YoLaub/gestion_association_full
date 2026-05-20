"use client";

import React from 'react';
import { Home, Users, Plus, Calendar, Settings, type LucideIcon } from 'lucide-react';
import { usePathname } from 'next/dist/client/components/navigation';
import Link from 'next/link';
import s from './BottomNav.module.css';

interface NavItem {
    label: string;
    href: string;
    icon: LucideIcon;
    fab?: boolean;
}

const NAV_ITEMS: NavItem[] = [
    { label: 'Accueil',  href: '/',        icon: Home },
    { label: 'Membres',  href: '/members', icon: Users },
    { label: '',         href: '/add',     icon: Plus,     fab: true },
    { label: 'Agenda',   href: '/agenda',  icon: Calendar },
    { label: 'Réglages', href: '/settings', icon: Settings },
];

export function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className={s.nav}>
            {NAV_ITEMS.map(({ label, href, icon: Icon, fab }) =>
                fab ? (
                    <Link key={href} href={href} className={s.fab} aria-label="Ajouter">
                        <Icon size={22} strokeWidth={1.6} />
                    </Link>
                ) : (
                    <Link
                        key={href}
                        href={href}
                        className={`${s.navBtn}${pathname === href ? ` ${s.navBtnActive}` : ''}`}
                    >
                        <Icon size={18} strokeWidth={1.6} />
                        <span>{label}</span>
                    </Link>
                )
            )}
        </nav>
    );
}
