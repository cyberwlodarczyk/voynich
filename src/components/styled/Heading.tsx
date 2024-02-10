import { HTMLAttributes } from "react";
import { clsx } from "clsx";
import styles from "./Heading.module.css";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export function Heading({ className, ...props }: HeadingProps) {
  return <h1 {...props} className={clsx(styles.heading, className)} />;
}
