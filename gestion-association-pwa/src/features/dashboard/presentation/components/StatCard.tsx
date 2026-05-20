import { Users, Euro, Calendar, FileText, type LucideIcon } from 'lucide-react';
import { StatColor } from '../../domain/entities/DashboardData';
import s from './StatCard.module.css';

const iconMap: Record<string, LucideIcon> = {
    Users, Euro, Calendar,
};

interface StatCardProps {
    label: string;
    value: string;
    trend: string | null;
    color: StatColor;
    iconName: string;
}

export function StatCard({ label, value, trend, iconName }: StatCardProps) {
    const Icon = iconMap[iconName] ?? FileText;

    return (
        <div className={s.card}>
            <div className={s.iconWrap}>
                <Icon size={16} strokeWidth={1.6} />
            </div>
            <p className={s.label}>{label}</p>
            <div>
                <span className={s.value}>{value}</span>
                {trend && <span className={s.trend}> {trend}</span>}
            </div>
        </div>
    );
}
