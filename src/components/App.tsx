import { Link, Switch, Route } from "wouter";
import styles from "./App.module.css";
import { Decrypt, Home, Init, NotFound } from "./pages";
import { Logo } from "./styled";

export function App() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Logo />
        </Link>
      </header>
      <main className={styles.main}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/init">
            <Init />
          </Route>
          <Route path="/decrypt">
            <Decrypt />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
}
