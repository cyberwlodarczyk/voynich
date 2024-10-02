import { Link } from "wouter";
import { Category, Record } from "../../../lib";
import {
  Icon,
  UserIcon,
  BriefcaseIcon,
  DollarSignIcon,
  ShoppingCartIcon,
  MapIcon,
  ShareIcon,
  MoreHorizontalIcon,
} from "../../styled";
import styles from "./VaultItem.module.css";

const ICONS: { [key in Category]: typeof Icon } = {
  personal: UserIcon,
  work: BriefcaseIcon,
  finance: DollarSignIcon,
  shopping: ShoppingCartIcon,
  travel: MapIcon,
  social: ShareIcon,
  other: MoreHorizontalIcon,
};

export interface VaultItemProps {
  record: Record;
}

export function VaultItem({ record: { id, category, name } }: VaultItemProps) {
  const Icon = ICONS[category];
  return (
    <Link asChild href={`/item/${id}`}>
      <a className={styles.link}>
        <span aria-label={category} className={styles.category}>
          <Icon />
        </span>
        <span className={styles.text}>{name}</span>
      </a>
    </Link>
  );
}
