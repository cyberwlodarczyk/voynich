import { AnchorHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Icon } from "./Icon";
import styles from "./Fab.module.css";

export interface FabProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: typeof Icon;
}

export function Fab({ icon: Icon, className, ...props }: FabProps) {
  return (
    <a {...props} className={clsx(styles.fab, className)}>
      <Icon size={24} />
    </a>
  );
}
