// src/app/page.tsx
import { auth } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";

// Clean Architecture imports
import { GetDashboardDataUseCase } from "@/features/dashboard/application/useCases/GetDashboardDataUseCase";
import { MockDashboardRepository } from "@/features/dashboard/infrastructure/repositories/MockDashboardRepository";
import { DashboardView } from "@/features/dashboard/presentation/components/DashboardView";

export default async function HomePage() {
  // 1. Sécurité : Vérification Clerk (Côté Serveur)
  const { userId } = await auth();

  if (!userId) {
    // Si pas connecté, on renvoie vers le login (ou on affiche une Landing Page)
    return <RedirectToSignIn />;
  }

  // 2. Initialisation (Injection de dépendances)
  // changer "Mock" par "Supabase" plus tard
  const repository = new MockDashboardRepository();
  const useCase = new GetDashboardDataUseCase(repository);

  // 3. Exécution (Récupération des données pour cet utilisateur spécifique)
  // au besoin : useCase.execute(userId)
  const dashboardData = await useCase.execute();

  // 4. Rendu
  return (
      <main>
        <DashboardView data={dashboardData} />
      </main>
  );
}