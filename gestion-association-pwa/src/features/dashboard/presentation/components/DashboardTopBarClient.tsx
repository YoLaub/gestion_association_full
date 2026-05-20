"use client";

import { Bell } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import s from './DashboardView.module.css';

interface DashboardTopBarClientProps {
    hasNotifications: boolean;
}

export function DashboardTopBarClient({ hasNotifications }: DashboardTopBarClientProps) {
    return (
        <div className={s.topBarRight}>
            <button type="button" className={s.iconBtn}>
                <Bell size={16} strokeWidth={1.6} />
                {hasNotifications && <span className={s.notifDot} />}
            </button>
            <UserButton />
        </div>
    );
}
