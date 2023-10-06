import { FC, createContext, useEffect, useState } from "react";
import firebase from "../../firabase/config";
import { AuthContextProps, AuthContextProvider } from "./types";
import { UserModel } from "@/models/user";
import router from "next/router";
import Cookies from "js-cookie";

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => undefined,
  register: async () => undefined,
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
    setIsLoading(true);
    try {
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

      await settingsUser(resp.user);
      router.push("/");
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      await settingsUser(resp.user);
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await settingsUser(resp.user);
      router.push("/");
    } finally {
      setIsLoading(false);
    }
  };

  const logoff = async () => {
    setIsLoading(true);
    try {
      await firebase.auth().signOut();
      await settingsUser(null);
      router.push("/auth");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (Cookies.get("admin-template-auth")) {
      const cancel = firebase.auth().onIdTokenChanged(settingsUser);
      return () => cancel();
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        loginGoogle,
        logoff,
        loading: isLoading,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
