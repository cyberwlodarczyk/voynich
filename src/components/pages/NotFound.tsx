import { Heading } from "../styled";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <>
      <p className={styles.status}>404</p>
      <Heading>page not found</Heading>
    </>
  );
}
