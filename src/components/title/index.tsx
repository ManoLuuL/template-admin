import { FC } from "react";
import { TitleProps } from "./types";

const Title: FC<TitleProps> = (props) => {
  const { subTitle, title } = props;

  return (
    <>
      <h1 className="font-black text-3xl text-gray-900">{title}</h1>
      <h2 className="font-light text-sm text-gray-600">{subTitle}</h2>
    </>
  );
};

export default Title;
