import { FC } from "react";
import { LayoutProps } from "./types";
import SidebarMenu from "../sidebar-menu";
import TopbarMenu from "../topbar-menu";
import Content from "../content";

const Layout: FC<LayoutProps> = (props) => {
  const { subTitle, title, children } = props;

  return (
    <div className="flex h-screen w-screen">
      <SidebarMenu />
      <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
        <TopbarMenu subTitle={subTitle} title={title} />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
