import { Heading } from "../styled";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <div>
      <header>
        <div className={styles.status}>404</div>
      </header>
      <main>
        <Heading>page not found</Heading>
      </main>
    </div>
  );
}
