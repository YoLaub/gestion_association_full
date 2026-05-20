import React from 'react';
import { Calendar, Users, Store, FileText } from 'lucide-react';
import { StatCard } from './StatCard';
import { ActionButton } from './ActionButton';
import { DashboardTopBarClient } from './DashboardTopBarClient';
import { DashboardData } from '../../domain/entities/DashboardData';
import s from './DashboardView.module.css';

export function DashboardView({ data }: { data: DashboardData }) {
    if (!data) return null;

    return (
        <main className={s.screen}>

            {/* Top bar */}
            <div className={s.topBar}>
                <div className={s.logo}>
                    <span className={s.logoGlyph}>A</span>
                    <span className={s.logoName}>Asso360</span>
                    <span className={s.logoSub}>/sport</span>
                </div>
                <DashboardTopBarClient hasNotifications={data.user.hasNotifications} />
            </div>

            {/* Content */}
            <div className={s.content}>

                <div className={s.greeting}>
                    <p className={s.eyebrow}>Tableau de bord</p>
                    <h1 className={s.displayTitle}>Bonjour, {data.user.name}</h1>
                </div>

                <div className={s.statsRow}>
                    {data.stats.map((stat, idx) => (
                        <StatCard key={idx} {...stat} />
                    ))}
                </div>

                <section className={s.section}>
                    <p className={s.sectionLabel}>Actions rapides</p>
                    <div className={s.actionsGrid}>
                        <ActionButton label="Mon Profil"      icon={Users}    href="/members/add"   />
                        <ActionButton label="Mes Événements"  icon={Calendar} href="/events/get"    />
                        <ActionButton label="Ma Boutique"     icon={Store}    href="/boutique/get"  />
                        <ActionButton label="Mes Documents"   icon={FileText} href="/documents/get" />
                    </div>
                </section>

                {data.upcomingEventTitle && (
                    <section className={s.section}>
                        <p className={s.sectionLabel}>Prochain événement</p>
                        <div className={s.eventCard}>
                            <div className={s.eventIconWrap}>
                                <Calendar size={18} strokeWidth={1.6} />
                            </div>
                            <div className={s.eventBody}>
                                <p className={s.eventTitle}>{data.upcomingEventTitle}</p>
                                <p className={s.eventDate}>{data.upcomingEventDate}</p>
                            </div>
                            <span className={s.eventChip}>À venir</span>
                        </div>
                    </section>
                )}
            </div>

        </main>
    );
}
