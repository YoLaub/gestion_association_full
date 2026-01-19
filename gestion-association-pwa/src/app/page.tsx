import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SignOutButton>
          <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Out
          </button>
        </SignOutButton>
      <h1 className="text-2xl font-bold">Bienvenue dans Mon App PWA</h1>
    </main>
  );
}