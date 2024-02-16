import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./Button.module.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return <button {...props} className={clsx(styles.button, className)} />;
}
