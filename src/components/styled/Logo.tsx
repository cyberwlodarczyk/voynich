import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import { ShieldIcon } from "./Icon";
import styles from "./Logo.module.css";

export function Logo({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <header {...props} className={clsx(styles.header, className)}>
      <span className={styles.text}>voynich</span>
      <ShieldIcon standard={false} className={styles.icon} />
    </header>
  );
}
