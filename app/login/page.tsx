import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-4 md:p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance AI"
          className="mb-4 md:mb-8"
        />
        <h1 className="mb-2 text-2xl font-bold md:mb-3 md:text-4xl">
          Bem-Vindo
        </h1>
        <p className="mb-4 text-sm text-muted-foreground md:mb-8 md:text-base">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2"></LogInIcon>
            Fazer Login ou criar conta
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-64 w-full md:h-full">
        <Image
          src="/login.png"
          alt="Faça seu login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
