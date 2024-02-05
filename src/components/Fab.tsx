import { Link } from "wouter";
import styles from "./Fab.module.css";
import { PlusIcon } from "./styled";

export function Fab() {
  return (
    <Link href="/add">
      <a aria-label="add" className={styles.fab}>
        <PlusIcon size={24} />
      </a>
    </Link>
  );
}
