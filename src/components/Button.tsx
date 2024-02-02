import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

export function Button({ children }: PropsWithChildren) {
  return <button className={styles.button}>{children}</button>;
}
