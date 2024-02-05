import { Link } from "wouter";
import { Record, Category } from "../lib";
import styles from "./List.module.css";
import {
  BriefcaseIcon,
  DollarSignIcon,
  Icon,
  MapIcon,
  MoreHorizontalIcon,
  ShareIcon,
  ShoppingCartIcon,
  UserIcon,
} from "./styled";

const ICONS: { [key in Category]: typeof Icon } = {
  personal: UserIcon,
  work: BriefcaseIcon,
  finance: DollarSignIcon,
  shopping: ShoppingCartIcon,
  travel: MapIcon,
  social: ShareIcon,
  other: MoreHorizontalIcon,
};

export interface ListProps {
  records: Record[];
}

export function List({ records }: ListProps) {
  return (
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
                  className={styles.icon}
                >
                  <Icon size={24} />
                </span>
                <span className={styles.text}>{record.name}</span>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
