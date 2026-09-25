import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { AuthShell } from "@/components/auth-shell";

export const metadata = {
  title: "Iniciar sesión",
  description:
    "Ingresá a tu cuenta de AuraHealth para gestionar tus turnos, tu historial clínico y tus pagos.",
};

export default function SignInPage() {
  return (
    <AuthShell
      intro={{
        eyebrow: "Sala médica privada",
        heading: "Tu salud, nuestra prioridad",
        description:
          "Gestioná tus turnos, consultá tu historial médico y accedé a todos nuestros servicios de forma fácil y segura.",
      }}
      auth={{
        badge: "Bienvenido de nuevo",
        heading: "Ingresá a tu cuenta",
        description:
          "Ingresá con tu email y contraseña para acceder a tu panel.",
      }}
      footer={
        <p className="text-[clamp(0.8125rem,1.7vh,0.9375rem)] text-surface/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.45)]">
          ¿Todavía no tenés cuenta?{" "}
          <Link
            href="/sign-up"
            className="rounded-sm font-semibold text-primary-light underline decoration-primary-light/60 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface"
          >
            Creá una cuenta
          </Link>
        </p>
      }
    >
      <SignIn signUpUrl="/sign-up" fallbackRedirectUrl="/dashboard" />
    </AuthShell>
  );
}
