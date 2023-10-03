import { FC } from "react";
import { AuthInputProps } from "./types";

export const AuthInput: FC<AuthInputProps> = (props) => {
  const { label, value, handleChangeValue, type } = props;

  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input type={type} value={value} onChange={handleChangeValue} />
    </div>
  );
};
