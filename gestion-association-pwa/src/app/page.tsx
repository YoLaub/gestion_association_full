// src/app/page.tsx
import { auth } from "@clerk/nextjs/server";
import { RedirectToSignIn } from "@clerk/nextjs";

// Clean Architecture imports
import { DashboardView } from "@/features/dashboard/presentation/components/DashboardView";
import {makeGetDashboardDataUseCase} from "@/features/dashboard/main";

export default async function HomePage() {
  // 1. Sécurité : Vérification Clerk (Côté Serveur)
  const { userId } = await auth();

  if (!userId) {
    // Si pas connecté, on renvoie vers le login (ou on affiche une Landing Page)
    return <RedirectToSignIn />;
  }

  const dashboardData = await makeGetDashboardDataUseCase().execute();

  // 4. Rendu
  return (
      <main>
        <DashboardView data={dashboardData} />
      </main>
  );
}