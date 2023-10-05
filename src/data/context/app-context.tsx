import { FC, createContext, useState } from "react";
import { AppContextProps, AppContextProvider, Tema } from "./types";

const AppContext = createContext<AppContextProps>({});

export const AppProvider: FC<AppContextProvider> = ({ children }) => {
  const [tema, setTema] = useState<Tema>("light");
  const handleChangeTema = () => {
    setTema(tema === "light" ? "dark" : "light");
  };

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
