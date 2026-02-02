import React from 'react';
import { type LucideIcon } from "lucide-react";
import Link from "next/link";


interface ActionButtonProps {
    label: string;
    icon: LucideIcon;
    href: string;
    color?: "red" | "orange" | "amber";
}

export const ActionButton = ({ label, icon: Icon, href, color = "red" }: ActionButtonProps) => {
    const colors = {
        red: "bg-red-600 hover:bg-red-500 shadow-red-200",
        orange: "bg-orange-600 hover:bg-orange-500 shadow-orange-200",
        amber: "bg-amber-500 hover:bg-amber-600 shadow-amber-200",
    };

    return (
        <Link
            href={href}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg text-white shadow-lg transition-transform active:scale-95 ${colors[color]}`}
        >
            <Icon size={28} strokeWidth={2} />
            <span className="text-sm font-semibold">{label}</span>
        </Link>
    );
};