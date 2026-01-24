import React from 'react';
import { type LucideIcon } from "lucide-react";
import Link from "next/link";


interface ActionButtonProps {
    label: string;
    icon: LucideIcon;
    href: string;
    color?: "indigo" | "emerald" | "amber";
}

export const ActionButton = ({ label, icon: Icon, href, color = "indigo" }: ActionButtonProps) => {
    const colors = {
        indigo: "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200",
        emerald: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200",
        amber: "bg-amber-500 hover:bg-amber-600 shadow-amber-200",
    };

    return (
        <Link
            href={href}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl text-white shadow-lg transition-transform active:scale-95 ${colors[color]}`}
        >
            <Icon size={28} strokeWidth={2} />
            <span className="text-sm font-semibold">{label}</span>
        </Link>
    );
};