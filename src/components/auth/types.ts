export type AuthInputProps = {
  label: string;
  value: any;
  handleChangeValue(newValue: any): void;
  type?: "text" | "email" | "password";
  requerid?: boolean;
};
