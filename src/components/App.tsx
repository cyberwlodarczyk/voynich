import { Link } from "wouter";
import { ShieldIcon } from "./styled";
import { Router } from "./Router";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.logo}>
            <span className={styles.logoText}>voynich</span>
            <ShieldIcon size={40} className={styles.logoIcon} />
          </a>
        </Link>
      </header>
      <main className={styles.router}>
        <Router />
      </main>
    </>
  );
}
