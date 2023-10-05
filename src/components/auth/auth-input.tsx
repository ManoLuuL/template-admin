import { FC } from "react";
import { AuthInputProps } from "./types";

export const AuthInput: FC<AuthInputProps> = (props) => {
  const { label, value, handleChangeValue, type, requerid } = props;

  return (
    <div className="flex flex-col mt-4">
      <label>{label}</label>
      <input
        type={type ?? "text"}
        value={value}
        onChange={(e) => handleChangeValue(e.target.value)}
        required={requerid}
        className="px-4 py-3 rounded-lg bg-gray-200 mt-2 text-black
        border focus:border-blue-500  focus:bg-white
        focus:outline-none"
      />
    </div>
  );
};
