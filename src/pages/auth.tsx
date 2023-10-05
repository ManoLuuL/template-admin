import { FC, useState } from "react";
import { AutenticacaoProps } from "./types";
import { AuthInput } from "@/components/auth/auth-input";
import img from "../assets/img-6.png";
import Image from "next/image";

export default function AuthPage(props: AutenticacaoProps) {
  const {} = props;

  const [mode, setMode] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (mode === "login") console.log("login");
    else console.log("cadastro");
  };

  return (
    <div className="flex  h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <Image
          alt="Imagem da tela de autenticacao"
          src={img}
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2">
        <h1 className="text-3xl font-bold mb-5">
          {mode === "login"
            ? "Entre com a sua conta"
            : "Cadastre-se na plataforma"}
        </h1>
        <AuthInput
          label="E-mail"
          value={email}
          handleChangeValue={setEmail}
          type="email"
          requerid
        />
        <AuthInput
          label="Senha"
          value={password}
          handleChangeValue={setPassword}
          type="password"
          requerid
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6"
        >
          {mode === "login" ? "Login" : "Cadastrar"}
        </button>

        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={handleSubmit}
          className="w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3"
        >
          Entrar com Google
        </button>

        {mode === "login" ? (
          <p>
            Novo por aqui?
            <a
              onClick={() => setMode("cadastro")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              {" "}
              Crie uma conta gratuitamente.
            </a>
          </p>
        ) : (
          <p>
            Já possui cadastro?
            <a
              onClick={() => setMode("login")}
              className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
            >
              {" "}
              Faça seu login
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
