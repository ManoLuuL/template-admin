import { FC } from "react";
import loading from "../../assets/loading.gif";
import Image from "next/image";
import useAuthAutentication from "@/data/hooks/use-auth-autentication";
import router from "next/router";

export const AuthCheck: FC<{ children?: any }> = ({ children }) => {
  const { user, loading: isLoading } = useAuthAutentication();

  const render = () => {
    return <>{children}</>;
  };

  const renderLoading = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <Image alt="loading" src={loading} />
      </div>
    );
  };

  if (!isLoading && user?.email) {
    return render();
  } else if (isLoading) {
    return renderLoading();
  } else {
    router.push("/auth");
    return null;
  }
};
