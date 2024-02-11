import { Switch, Route } from "wouter";
import { useStore } from "../lib";
import { Home, NotFound, Add, Details, Init, Decrypt } from "./pages";
import { useEffect } from "react";

export function Router() {
  const { error, db, object, records, connect } = useStore();
  useEffect(() => {
    if (!error && !db) {
      connect();
    }
  }, [error, db, connect]);
  if (db === null) {
    return null;
  }
  if (object === null) {
    return <Init />;
  }
  if (records === null) {
    return <Decrypt />;
  }
  return (
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
  );
}
