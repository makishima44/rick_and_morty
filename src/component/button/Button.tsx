import type { ComponentPropsWithoutRef } from "react";
import s from "./Button.module.css";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "default" | "pagination";
};

export const Button = ({ children, variant = "default", ...rest }: ButtonProps) => {
  const classes = `${s.button} ${variant === "pagination" ? s["button-pagination"] : ""}`;

  return (
    <button className={classes} {...rest}>
      <p>{children}</p>
    </button>
  );
};
