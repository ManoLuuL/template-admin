import { FC } from "react";
import { SidebarMenu } from "./types";
import SidebarMenuItem from "./sidebar-menu-item";
import { IconExit, IconHome, IconNotification, IconSettings } from "./icons";
import { Logo } from "../logo";

const SidebarMenu: FC<SidebarMenu> = () => {
  return (
    <>
      <aside className="flex flex-col dark:bg-gray-900 dark:text-gray-200 bg-gray-200 text-gray-700">
        <div className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col items-center justify-center">
          <Logo />
        </div>
        <ul className="flex-grow">
          <SidebarMenuItem url="/" text="Inicio" icon={IconHome} />
          <SidebarMenuItem
            url="/settings"
            text="Configurações"
            icon={IconSettings}
          />
          <SidebarMenuItem
            url="/notification"
            text="Notificações"
            icon={IconNotification}
          />
        </ul>
        <ul>
          <SidebarMenuItem
            text="Sair"
            icon={IconExit}
            onClick={() => console.log("sair")}
            className="text-red-500 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white"
          />
        </ul>
      </aside>
    </>
  );
};

export default SidebarMenu;
