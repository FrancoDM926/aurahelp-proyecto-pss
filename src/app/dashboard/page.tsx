import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { BrandLogo } from "@/components/logo";
import { HeartPulseIcon } from "@/components/icons";

export const metadata = {
  title: "Dashboard",
  description: "Tu espacio de salud en AuraHealth.",
};

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="flex min-h-dvh flex-col bg-background">
      <header className="flex items-center justify-between border-b border-line bg-surface px-6 py-4 sm:px-10">
        <BrandLogo />
        <UserButton />
      </header>

      <section className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:py-24">
        <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-primary-light text-primary">
          <HeartPulseIcon className="size-8" />
        </span>

        <h1 className="mt-8 text-3xl font-bold tracking-tight text-primary-dark sm:text-4xl">
          Dashboard
        </h1>
        <p className="mt-4 text-lg text-pretty text-ink">
          Estamos preparando tu espacio de salud.
        </p>
        <p className="mt-4 max-w-md text-pretty text-ink-secondary">
          Próximamente podrás gestionar tus turnos, consultar tu historial y
          acceder a todos los servicios de AuraHealth.
        </p>
      </section>
    </main>
  );
}
