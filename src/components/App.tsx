import { Switch, Route } from "wouter";
import styles from "./App.module.css";
import { Home, NotFound } from "./pages";
import { Header } from "./Header";

export function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
}
