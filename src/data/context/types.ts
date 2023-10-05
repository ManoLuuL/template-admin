import { UserModel } from "@/models/user";

export type AppContextProvider = {
  children: any;
};

export type Tema = "dark" | "light";

export type AppContextProps = {
  tema?: Tema;
  changeTema?(): void;
};

export type AuthContextProps = {
  user: UserModel | null;
  loginGoogle?(): Promise<void>;
};

export type AuthContextProvider = {
  children: any;
};
