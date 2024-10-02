import { Link } from "wouter";
import { useStore } from "../../../lib";
import { Heading, PlusIcon, Fab, FlexGrow } from "../../styled";
import { VaultItem } from "./VaultItem";
import styles from "./Vault.module.css";

export function Vault() {
  const records = useStore((state) => state.records)!;
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Heading>vault</Heading>
        <FlexGrow />
        <Link asChild href="/item/create">
          <Fab aria-label="create item" icon={PlusIcon} />
        </Link>
      </div>
      {records.length === 0 ? (
        <p className={styles.empty}>new items will appear here</p>
      ) : (
        <ul className={styles.items}>
          {records.map((record) => {
            return (
              <li key={record.id}>
                <VaultItem record={record} />
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
