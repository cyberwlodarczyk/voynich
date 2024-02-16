import { Link } from "wouter";
import { Category, useStore } from "../../lib";
import {
  Icon,
  PlusIcon,
  UserIcon,
  BriefcaseIcon,
  DollarSignIcon,
  ShoppingCartIcon,
  MapIcon,
  ShareIcon,
  Fab,
  MoreHorizontalIcon,
} from "../styled";
import styles from "./Home.module.css";

const ICONS: { [key in Category]: typeof Icon } = {
  personal: UserIcon,
  work: BriefcaseIcon,
  finance: DollarSignIcon,
  shopping: ShoppingCartIcon,
  travel: MapIcon,
  social: ShareIcon,
  other: MoreHorizontalIcon,
};

export function Home() {
  const records = useStore((state) => state.records);
  if (!records) {
    return null;
  }
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Vault</h1>
        <div className={styles.space} />
        <Link href="/add">
          <Fab aria-label="add" icon={PlusIcon} />
        </Link>
      </div>
      <ul className={styles.records}>
        {records.map((record) => {
          const Icon = ICONS[record.category];
          return (
            <li key={record.id}>
              <Link href={`/${record.id}`}>
                <a className={styles.record}>
                  <span
                    role="presentation"
                    aria-label={record.category}
                    className={styles.recordIcon}
                  >
                    <Icon size={24} />
                  </span>
                  <span className={styles.recordText}>{record.name}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
