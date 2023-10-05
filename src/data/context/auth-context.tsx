import { FC, createContext, useState } from "react";
import firebase from "../../firabase/config";
import { AuthContextProps, AuthContextProvider } from "./types";
import { UserModel } from "@/models/user";
import router from "next/router";

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

export const AuthProvider: FC<AuthContextProvider> = ({ children }) => {
  const [user, setUser] = useState<UserModel | null>(null);

  const loginGoogle = async () => {
    const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    if (resp.user?.email) {
      const usuario = await userStandardized(resp.user);
      if (usuario) {
        setUser(usuario);
        router.push("/");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
