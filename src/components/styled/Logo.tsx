import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import { ShieldIcon } from "./Icon";
import styles from "./Logo.module.css";

export type LogoProps = HTMLAttributes<HTMLElement>;

export function Logo({ className, ...props }: LogoProps) {
  return (
    <header {...props} className={clsx(styles.logo, className)}>
      <span className={styles.text}>voynich</span>
      <ShieldIcon size={40} className={styles.icon} />
    </header>
  );
}
