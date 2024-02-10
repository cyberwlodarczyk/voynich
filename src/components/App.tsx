import { Switch, Route, Link } from "wouter";
import { Home, NotFound, Add, Details } from "./pages";
import { ShieldIcon } from "./styled";
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
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/:id">
            <Details />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
}
