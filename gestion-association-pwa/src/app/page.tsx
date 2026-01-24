/**
 * src/app/page.tsx
 * Point d'entrée Next.js.
 * Responsabilité : Injection de dépendances et Orchestration.
 */

import { GetDashboardDataUseCase } from "@/features/dashboard/application/useCases/GetDashboardDataUseCase";
import { MockDashboardRepository } from "@/features/dashboard/infrastructure/repositories/MockDashboardRepository";
import { DashboardView } from "@/features/dashboard/presentation/components/DashboardView";

export default async function Page() {
  // 1. Initialisation (Injection manuelle)
  const repository = new MockDashboardRepository();
  const useCase = new GetDashboardDataUseCase(repository);

  // 2. Exécution
  const dashboardData = await useCase.execute();

  // 3. Rendu
  return <DashboardView data={dashboardData} />;
}