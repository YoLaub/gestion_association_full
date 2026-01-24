import { DashboardRepository } from "../../domain/repositories/DashboardRepository";
import { DashboardData } from "../../domain/entities/DashboardData";

export class GetDashboardDataUseCase {
    // Injection de dépendance via le constructeur
    constructor(private readonly dashboardRepository: DashboardRepository) {}

    async execute(): Promise<DashboardData> {
        return await this.dashboardRepository.getDashboardData();
    }
}