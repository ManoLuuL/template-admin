import { FC } from "react";
import { LayoutProps } from "./types";
import SidebarMenu from "../sidebar-menu";
import TopbarMenu from "../topbar-menu";
import Content from "../content";
import useAppData from "@/data/hooks/use-app-data";
import { AuthCheck } from "../auth/auth-check";

const Layout: FC<LayoutProps> = (props) => {
  const { subTitle, title, children } = props;

  const { tema } = useAppData();

  return (
    <AuthCheck>
      <div className={`${tema} flex h-screen w-screen`}>
        <SidebarMenu />
        <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
          <TopbarMenu subTitle={subTitle} title={title} />
          <Content>{children}</Content>
        </div>
      </div>
    </AuthCheck>
  );
};

export default Layout;
