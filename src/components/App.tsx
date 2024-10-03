import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { useStore } from "../lib";
import {
  Vault,
  NotFound,
  CreateItem,
  Item,
  OpenVault,
  CreateVault,
  DeleteItem,
  EditItem,
  Error,
} from "./pages";

export function App() {
  const { error, db, object, records, connect } = useStore();
  useEffect(() => {
    history.replaceState(null, "", "/");
  }, []);
  useEffect(() => {
    if (!error && !db) {
      connect();
    }
  }, [error, db, connect]);
  if (error) {
    return <Error />;
  }
  if (!db) {
    return null;
  }
  if (!object) {
    return <CreateVault />;
  }
  if (!records) {
    return <OpenVault />;
  }
  return (
    <Switch>
      <Route path="/">
        <Vault />
      </Route>
      <Route path="/item/create">
        <CreateItem />
      </Route>
      <Route path="/item/:id">
        <Item />
      </Route>
      <Route path="/item/:id/edit">
        <EditItem />
      </Route>
      <Route path="/item/:id/delete">
        <DeleteItem />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
