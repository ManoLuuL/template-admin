import { FC } from "react";
import { TopbarMenuProps } from "./types";
import Title from "../title";

const TopbarMenu: FC<TopbarMenuProps> = (props) => {
  const { subTitle, title } = props;
  return (
    <>
      <Title subTitle={subTitle} title={title} />
    </>
  );
};

export default TopbarMenu;
