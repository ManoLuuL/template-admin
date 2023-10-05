import { FC, createContext, useEffect, useState } from "react";
import firebase from "../../firabase/config";
import { AuthContextProps, AuthContextProvider } from "./types";
import { UserModel } from "@/models/user";
import router from "next/router";
import Cookies from "js-cookie";

const AuthContext = createContext<AuthContextProps>({
  user: null,
});

const userStandardized = async (userFirebase: firebase.User | null) => {
  if (!userFirebase) return;

  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0]?.providerId ?? "",
    imageUrl: userFirebase.photoURL,
  };
};

const manageCookie = (logado: boolean) => {
  if (logado) {
    Cookies.set("admin-template-auth", JSON.stringify(logado), {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-auth");
  }
};

export const AuthProvider: FC<AuthContextProvider> = ({ children }) => {
  const [user, setUser] = useState<UserModel | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const settingsUser = async (userFirebase: firebase.User | null) => {
    if (userFirebase?.email) {
      const usuario = await userStandardized(userFirebase);
      setUser(usuario);
      manageCookie(true);
      setIsLoading(false);
      return usuario?.email;
    } else {
      setUser(undefined);
      manageCookie(false);
      setIsLoading(false);
      return false;
    }
  };

  const loginGoogle = async () => {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    settingsUser(resp.user);
    router.push("/");
  };

  useEffect(() => {
    const cancel = firebase.auth().onIdTokenChanged(settingsUser);
    return () => cancel();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        loginGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
