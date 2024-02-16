import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { useStore } from "../lib";
import { Home, NotFound, Add, Details, Init, Decrypt, Edit } from "./pages";

export function App() {
  const { error, db, object, records, connect } = useStore();
  useEffect(() => {
    if (!error && !db) {
      connect();
    }
  }, [error, db, connect]);
  if (error) {
    return error.message;
  }
  if (!db) {
    return null;
  }
  if (!object) {
    return <Init />;
  }
  if (!records) {
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
      <Route path="/:id/edit">
        <Edit />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
