import { FC, useState } from "react";
import { AutenticacaoProps } from "./types";
import { AuthInput } from "@/components/auth/auth-input";

export const Autenticacao: FC<AutenticacaoProps> = (props) => {
  const {} = props;

  const [mode, setMode] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Autenticação</h1>
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
    </div>
  );
};
