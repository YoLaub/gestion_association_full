export type StatColor = "blue" | "green" | "purple" | "orange";

// Objet métier : Une statistique
export class DashboardStat {
    constructor(
        public readonly label: string,
        public readonly value: string,
        public readonly trend: string | null,
        public readonly color: StatColor,
        public readonly iconName: string // Nom de l'icône (string) pour rester agnostique de l'UI
    ) {}
}

// Objet métier : L'utilisateur résumé
export class DashboardUser {
    constructor(
        public readonly name: string,
        public readonly hasNotifications: boolean
    ) {}
}

// Agregat racine : Toutes les données du Dashboard
export class DashboardData {
    constructor(
        public readonly user: DashboardUser,
        public readonly stats: DashboardStat[],
        public readonly upcomingEventTitle: string | null,
        public readonly upcomingEventDate: string | null
    ) {}
}