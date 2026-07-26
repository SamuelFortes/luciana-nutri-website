import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/icons/logo-icon";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 text-center">
      <LogoIcon className="h-12 w-12 text-primary" />
      <div className="space-y-2">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl">
          404
        </h1>
        <p className="text-muted-foreground">
          Essa página não existe ou foi movida.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Voltar para o início</Link>
      </Button>
    </div>
  );
}
