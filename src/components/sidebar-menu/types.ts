export type SidebarMenu = {};

export type SidebarMenuItemProps = {
  url?: string;
  text: string;
  icon: JSX.Element;
  onClick?(event: any): void;
  className?: string;
};
