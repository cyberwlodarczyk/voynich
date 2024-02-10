import { Link } from "wouter";
import { Category, Record, getRandomUUID } from "../../lib";
import {
  Fab,
  Icon,
  PlusIcon,
  UserIcon,
  BriefcaseIcon,
  DollarSignIcon,
  ShoppingCartIcon,
  MapIcon,
  ShareIcon,
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

const RECORDS: Record[] = Array.from({ length: 10 }, () => ({
  id: getRandomUUID(),
  category: "personal",
  name: "Google",
  createdAt: new Date(),
}));

export function Home() {
  return (
    <>
      <Link href="/add">
        <Fab text="New" icon={PlusIcon} />
      </Link>
      <ul className={styles.records}>
        {RECORDS.map((record) => {
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
    </>
  );
}
