import { useEffect, useId, useState } from "react";
import {
  useStore,
  isValidPassword,
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
} from "../../lib";
import { Form, Field, Button, Logo } from "../styled";
import styles from "./CreateVault.module.css";

interface Error {
  field: 0 | 1;
  message: string;
}

export function CreateVault() {
  const init = useStore((state) => state.init);
  const requirementsId = useId();
  const [masterPassword, setMasterPassword] = useState("");
  const [repeatedMasterPassword, setRepeatedMasterPassword] = useState("");
  const [error, setError] = useState<Error>();
  useEffect(() => {
    setError((prev) => (prev?.field === 0 ? undefined : prev));
  }, [masterPassword]);
  useEffect(() => {
    setError((prev) => (prev?.field === 1 ? undefined : prev));
  }, [repeatedMasterPassword]);
  return (
    <>
      <Logo />
      <main>
        <Form
          heading="create vault"
          small
          onSubmit={() => {
            if (masterPassword === "") {
              setError({ field: 0, message: "required" });
            } else if (!isValidPassword(masterPassword)) {
              setError({ field: 0, message: "invalid" });
            } else if (repeatedMasterPassword === "") {
              setError({ field: 1, message: "required" });
            } else if (repeatedMasterPassword !== masterPassword) {
              setError({ field: 1, message: "incorrect" });
            } else {
              init(masterPassword);
            }
          }}
        >
          <Field
            state={masterPassword}
            label="master password"
            setState={setMasterPassword}
            error={error?.field === 0}
            description={error?.field === 0 ? error.message : undefined}
            aria-describedby={requirementsId}
            type="password"
            aria-required
          />
          <Field
            state={repeatedMasterPassword}
            label="repeat master password"
            setState={setRepeatedMasterPassword}
            error={error?.field === 1}
            description={error?.field === 1 ? error.message : undefined}
            type="password"
            aria-required
          />
          <ul id={requirementsId} className={styles.requirements}>
            <li>
              {MIN_PASSWORD_LENGTH} to {MAX_PASSWORD_LENGTH} characters
            </li>
            <li>1 uppercase letter</li>
            <li>1 lowercase letter</li>
            <li>1 digit</li>
            <li>1 special character</li>
          </ul>
          <Button type="submit">confirm</Button>
        </Form>
      </main>
    </>
  );
}
