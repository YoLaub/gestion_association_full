import React from 'react';
import {
    Calendar,
    Bell,
    Users,
    Store,
    FileText,
    type LucideIcon
} from "lucide-react";

import Link from "next/link";
import { StatCard } from "./StatCard";
import { ActionButton } from "./ActionButton";
import { DashboardData, StatColor } from "../../domain/entities/DashboardData";



export function DashboardView({ data }: { data: DashboardData }) {
    if (!data) return null;

    return (
        <main className="min-h-screen bg-slate-50 pb-24 text-slate-900 font-sans">
            {/* Header */}
            <header className="bg-white px-6 pt-12 pb-6 rounded-b-[1rem] shadow-sm sticky top-0 z-10">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-slate-500 text-sm font-medium mb-0.5">Bonjour,</p>
                        <h1 className="text-2xl font-extrabold text-slate-900">{data.user.name} 👋</h1>
                    </div>
                    <button className="p-2.5 bg-slate-100 rounded-full text-slate-600 relative">
                        <Bell size={20} />
                        {data.user.hasNotifications && (
                            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-700 rounded-full border border-white"></span>
                        )}
                    </button>
                </div>
            </header>

            <div className="px-5 space-y-8 mt-6">
                {/* Stats */}
                <section className="flex gap-4 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
                    {data.stats.map((stat, idx) => (
                        <StatCard key={idx} {...stat} />
                    ))}
                </section>

                {/* Actions Rapides */}
                <section>
                    <div className="flex justify-between items-end mb-4 px-1">
                        <h2 className="text-lg font-bold text-slate-800">Actions rapides</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <ActionButton label="Mon Profil" icon={Users} href="/members/add" color="red" />
                        <ActionButton label="Mes Événement" icon={Calendar} href="/events/get" color="orange" />
                        <ActionButton label="Ma Boutique" icon={Store} href="/boutique/get" color="orange" />
                        <ActionButton label="Mes documents" icon={FileText} href="/documents/get" color="red" />
                    </div>
                </section>

                {/* Upcoming Event */}
                {data.upcomingEventTitle && (
                    <section>
                        <div className="flex justify-between items-end mb-4 px-1">
                            <h2 className="text-lg font-bold text-slate-800">Prochain événement</h2>
                        </div>
                        <div className="bg-gradient-to-br from-orange-300 to-orange-600 rounded-lg p-5 text-white shadow-lg shadow-indigo-200 relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-lg">
                                        <Calendar className="text-white" size={24} />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-1">{data.upcomingEventTitle}</h3>
                                <p className="text-indigo-100 text-sm">{data.upcomingEventDate}</p>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}