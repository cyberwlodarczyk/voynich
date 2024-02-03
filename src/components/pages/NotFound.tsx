import styles from "./NotFound.module.css";
import { Heading } from "../styled";

export function NotFound() {
  return (
    <>
      <p className={styles.p}>404</p>
      <Heading>page not found</Heading>
    </>
  );
}
