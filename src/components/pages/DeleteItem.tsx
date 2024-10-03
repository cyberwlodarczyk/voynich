import { useLayoutEffect, useEffect, useState } from "react";
import { useRecord, useStore } from "../../lib";
import { Button } from "../styled";
import { NotFound } from "./NotFound";
import styles from "./DeleteItem.module.css";

export function DeleteItem() {
  const record = useRecord();
  const [deleting, setDeleting] = useState(false);
  const update = useStore((state) => state.update);
  useEffect(() => {
    if (record && deleting) {
      update((records) => records.filter(({ id }) => id !== record.id));
    }
  }, [update, record, deleting]);
  useLayoutEffect(() => {
    if (!record && deleting) {
      history.go(-2);
    }
  }, [record, deleting]);
  if (!record) {
    return <NotFound />;
  }
  return (
    <main className={styles.container}>
      <p className={styles.confirmation}>
        are you sure you want to delete {record.name}?
      </p>
      <div className={styles.choice}>
        <Button variant="text" onClick={() => setDeleting(true)}>
          yes
        </Button>
        <Button variant="text" onClick={() => history.go(-1)}>
          no
        </Button>
      </div>
    </main>
  );
}
