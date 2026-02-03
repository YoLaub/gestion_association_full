// Types de base / Value Objects
export type StatColor = "blue" | "green" | "purple" | "orange";

// Objet métier : Une statistique
export type DashboardStat = {
    label: string;
    value: string;
    trend: string | null;
    color: StatColor;
    iconName: string; // On garde le nom de l'icône en string pour rester agnostique de l'UI
};

// Objet métier : L'utilisateur résumé
export type DashboardUser = {
    name: string;
    hasNotifications: boolean;
};

// Agrégat racine : Toutes les données du Dashboard
export type DashboardData = {
    user: DashboardUser;
    stats: DashboardStat[];
    upcomingEventTitle: string | null;
    upcomingEventDate: string | null;
};