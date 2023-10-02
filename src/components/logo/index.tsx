import { FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="bg-white h-10 w-10 rounded-full flex flex-col items-center justify-center">
      <div className="h-3 w-3 rounded-full bg-gray-600 mb-0.5" />
      <div className="flex mt-0.5">
        <div className="h-3 w-3 rounded-full bg-gray-600 mr-0.5" />
        <div className="h-3 w-3 rounded-full bg-gray-600 ml-0.5" />
      </div>
    </div>
  );
};
