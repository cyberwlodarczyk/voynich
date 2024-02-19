import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./Heading.module.css";

export function Heading({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 {...props} className={clsx(styles.heading, className)} />;
}
