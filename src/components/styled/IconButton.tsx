import { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Icon } from "./Icon";
import styles from "./IconButton.module.css";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: typeof Icon;
  small?: boolean;
}

export function IconButton({
  icon: Icon,
  small,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      className={clsx(styles.iconButton, small && styles.small, className)}
    >
      <Icon size={small ? 20 : 24} />
    </button>
  );
}
