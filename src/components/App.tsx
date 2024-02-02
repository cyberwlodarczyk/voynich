import { useState } from "react";
import styles from "./App.module.css";
import { Button } from "./Button";
import { Input } from "./Input";

export function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>voynich</h1>
      </header>
      <main className={styles.main}>
        <Input
          value={username}
          onChange={(value) => setUsername(value)}
          type="text"
          label="username"
          placeholder="john"
        />
        <Input
          value={password}
          onChange={(value) => setPassword(value)}
          type="password"
          label="password"
          placeholder="secret"
        />
        <Button>download</Button>
      </main>
    </>
  );
}
