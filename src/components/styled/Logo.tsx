import { AnchorHTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./Logo.module.css";
import { ShieldIcon } from "./Icon";

export function Logo({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} className={clsx(styles.a, className)}>
      <span className={styles.span}>voynich</span>
      <ShieldIcon size={40} className={styles.svg} />
    </a>
  );
}
