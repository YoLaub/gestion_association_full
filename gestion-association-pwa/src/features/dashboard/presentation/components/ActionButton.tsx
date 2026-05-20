import { type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import s from './ActionButton.module.css';

interface ActionButtonProps {
    label: string;
    icon: LucideIcon;
    href: string;
}

export function ActionButton({ label, icon: Icon, href }: ActionButtonProps) {
    return (
        <Link href={href} className={s.btn}>
            <div className={s.iconWrap}>
                <Icon size={16} strokeWidth={1.6} />
            </div>
            <span className={s.label}>{label}</span>
        </Link>
    );
}
