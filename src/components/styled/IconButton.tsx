import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Icon } from "./Icon";
import styles from "./IconButton.module.css";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: typeof Icon;
}

export function IconButton({
  icon: Icon,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      <Icon size={24} />
    </button>
  );
}
