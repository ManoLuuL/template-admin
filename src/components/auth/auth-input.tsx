import { FC } from "react";
import { AuthInputProps } from "./types";

export const AuthInput: FC<AuthInputProps> = (props) => {
  const { label, value, handleChangeValue, type } = props;

  return (
    <div className="flex flex-col mt-4">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChangeValue}
        className="px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:outline-none focus:bg-white"
      />
    </div>
  );
};
