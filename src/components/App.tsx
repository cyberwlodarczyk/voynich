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
  EditItem,
} from "./pages";

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
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
