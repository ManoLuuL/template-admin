import { FC, useMemo } from "react";
import { SidebarMenuItemProps } from "./types";
import Link from "next/link";

const SidebarMenuItem: FC<SidebarMenuItemProps> = (props) => {
  const { icon, text, url, onClick, className } = props;

  const menuLink = useMemo(() => {
    return (
      <div
        className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 ${className}`}
      >
        {icon}
        <span className="text-xs font-light ">{text}</span>
      </div>
    );
  }, [className, icon, text]);

  return (
    <>
      <li onClick={onClick} className="hover:bg-gray-100 cursor-pointer">
        {url ? <Link href={url}>{menuLink}</Link> : menuLink}
      </li>
    </>
  );
};

export default SidebarMenuItem;
