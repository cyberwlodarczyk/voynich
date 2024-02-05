import { Link } from "wouter";
import styles from "./Header.module.css";
import { ShieldIcon } from "./styled";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span className={styles.text}>voynich</span>
        <ShieldIcon size={40} className={styles.icon} />
      </Link>
    </header>
  );
}
