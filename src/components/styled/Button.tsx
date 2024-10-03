import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "text";
}

export function Button({
  variant = "contained",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(styles.button, styles[variant], className)}
    />
  );
}
