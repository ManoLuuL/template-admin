export type AppContextProvider = {
  children: any;
};

export type Tema = "dark" | "light";

export type AppContextProps = {
  tema?: Tema;
  changeTema?(): void;
};
