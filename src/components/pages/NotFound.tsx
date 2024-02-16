import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <>
      <p className={styles.status}>404</p>
      <h1 className={styles.heading}>Page not found</h1>
    </>
  );
}
