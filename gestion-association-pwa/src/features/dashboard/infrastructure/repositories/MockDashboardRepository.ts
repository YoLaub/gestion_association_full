import { DashboardRepository } from "../../domain/repositories/DashboardRepository";
import { DashboardData } from "../../domain/entities/DashboardData";

export class MockDashboardRepository implements DashboardRepository {
    async getDashboardData(): Promise<DashboardData> {
        return {
            user: { name: "Martha", hasNotifications: true },
            stats: [], // ... tes données
            upcomingEventTitle: "Course vélo",
            upcomingEventDate: "12 Mars, 10h00"
        };
    }
}

// On crée l'instance unique ici (Singleton manuel)
export const dashboardRepository = new MockDashboardRepository();