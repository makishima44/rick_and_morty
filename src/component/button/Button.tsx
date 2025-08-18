import type { ComponentPropsWithoutRef } from "react";
import s from "./Button.module.css";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};
