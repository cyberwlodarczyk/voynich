import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./FlexGrow.module.css";

export function FlexGrow({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={clsx(styles.grow, className)} />;
}
