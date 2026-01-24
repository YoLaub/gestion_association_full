import { DashboardRepository } from "../../domain/repositories/DashboardRepository";
import { DashboardData, DashboardStat, DashboardUser } from "../../domain/entities/DashboardData";

export class MockDashboardRepository implements DashboardRepository {
    async getDashboardData(): Promise<DashboardData> {

        const user = new DashboardUser("Martha", true);

        const stats = [
            new DashboardStat("Evenements", "7", "J-5", "blue", "Calendar"),
            new DashboardStat("Trésorerie", "2 450 €", "+12%", "green", "Euro"),
        ];

        return new DashboardData(
            user,
            stats,
            "Course vélo",
            "12 Mars, 10h00"
        );
    }
}