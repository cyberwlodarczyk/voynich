import { useEffect } from "react";
import { useStore } from "../../lib";
import styles from "./Error.module.css";

export function Error() {
  const error = useStore((state) => state.error);
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <main className={styles.container}>
      <div className={styles.background} />
      <div className={styles.message}>
        something went wrong. make sure you are using the latest version of a
        modern browser. if the problem persists, try clearing your site data
      </div>
    </main>
  );
}
