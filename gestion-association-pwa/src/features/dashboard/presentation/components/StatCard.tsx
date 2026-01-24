import {
    Users,
    Euro,
    Calendar,
    FileText,
    type LucideIcon
} from "lucide-react";
import { StatColor } from "../../domain/entities/DashboardData";

// Adapter UI : Mapping String (Domain) -> Composant (React)
const iconMap: Record<string, LucideIcon> = {
    "Users": Users,
    "Euro": Euro,
    "Calendar": Calendar
};

interface StatCardProps {
    label: string;
    value: string;
    trend: string | null;
    color: StatColor;
    iconName: string;
}

export const StatCard = ({ label, value, trend, color, iconName }: StatCardProps) => {
    const Icon = iconMap[iconName] || FileText; // Fallback icon

    const colorClasses: Record<StatColor, string> = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-emerald-50 text-emerald-600",
        purple: "bg-purple-50 text-purple-600",
        orange: "bg-orange-50 text-orange-600",
    };

    return (
        <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3 min-w-[160px]">
            <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
                <Icon size={24} />
            </div>
            <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</p>
                <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-slate-900">{value}</span>
                    {trend && <span className="text-xs font-semibold text-emerald-600 mb-1">{trend}</span>}
                </div>
            </div>
        </div>
    );
};