import { FC } from "react";
import { TopbarMenuProps } from "./types";
import Title from "../title";
import { ButtonChangeTema } from "../button-change-tema";
import useAppData from "@/data/hooks/use-app-data";

const TopbarMenu: FC<TopbarMenuProps> = (props) => {
  const { subTitle, title } = props;

  const { changeTema, tema } = useAppData();

  return (
    <div className="flex">
      <Title subTitle={subTitle} title={title} />
      <div className="flex flex-grow justify-end">
        <ButtonChangeTema tema={tema ?? "dark"} changeTema={changeTema} />
      </div>
    </div>
  );
};

export default TopbarMenu;
