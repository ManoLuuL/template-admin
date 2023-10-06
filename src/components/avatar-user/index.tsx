import useAuthAutentication from "@/data/hooks/use-auth-autentication";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import avatar from "../../assets/avatar.png";
import { AvatarUserProps } from "./types";

export const AvatarUser: FC<AvatarUserProps> = ({ className }) => {
  const { user } = useAuthAutentication();

  return (
    <Link href="/profile">
      <Image
        alt=""
        src={user?.imageUrl ?? avatar}
        className={`h-10 w-10 rounded-full cursor-pointer ${className}`}
        width={20}
        height={20}
      />
    </Link>
  );
};
