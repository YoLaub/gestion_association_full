// features/dashboard/dashboardFactory.ts
import { dashboardRepository } from "./infrastructure/repositories/MockDashboardRepository";
import { GetDashboardDataUseCase } from "./application/useCases/GetDashboardDataUseCase";


export const makeGetDashboardDataUseCase = () => {
    return new GetDashboardDataUseCase(dashboardRepository);
};