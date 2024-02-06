import { clsx } from "clsx";
import styles from "./Fab.module.css";
import { Icon } from "./styled";
import { AnchorHTMLAttributes } from "react";

export interface FabProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  icon: typeof Icon;
}

export function Fab({ icon: Icon, text, className, ...props }: FabProps) {
  return (
    <a {...props} className={clsx(styles.button, className)}>
      <Icon size={24} />
      <span className={styles.text}>{text}</span>
    </a>
  );
}
