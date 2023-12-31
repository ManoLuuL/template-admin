import { FC } from "react";
import { ContentProps } from "./types";

const Content: FC<ContentProps> = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-col mt-7 dark:text-gray-200">{children}</div>
  );
};

export default Content;
