import { FC, createContext, useEffect, useState } from "react";
import { AppContextProps, AppContextProvider, Tema } from "./types";

const AppContext = createContext<AppContextProps>({});

export const AppProvider: FC<AppContextProvider> = ({ children }) => {
  const [tema, setTema] = useState("light");
  const handleChangeTema = () => {
    setTema(tema === "light" ? "dark" : "light");
    const newTema = tema === "light" ? "dark" : "light";
    localStorage.setItem("tema", newTema);
  };

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");
    setTema(temaSalvo ?? "light");
  }, []);

  return (
    <AppContext.Provider
      value={{
        tema,
        changeTema: handleChangeTema,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
