import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Icon } from "./Icon";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, ...props }: ButtonProps) {
  return <button {...props} className={clsx(styles.button, className)} />;
}

export interface IconButtonProps extends ButtonProps {
  icon: typeof Icon;
}

export function IconButton({
  icon: Icon,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button {...props} className={clsx(styles.iconButton, className)}>
      <Icon size={24} />
    </button>
  );
}

export interface FabProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: typeof Icon;
  text: string;
}

export function Fab({ icon: Icon, text, className, ...props }: FabProps) {
  return (
    <a {...props} className={clsx(styles.fab, className)}>
      <Icon size={24} />
      <span className={styles.fabText}>{text}</span>
    </a>
  );
}
