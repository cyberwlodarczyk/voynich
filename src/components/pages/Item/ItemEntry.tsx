import { PropsWithChildren, useId } from "react";
import { Icon, CopyIcon, IconButton, FlexGrow } from "../../styled";
import styles from "./ItemEntry.module.css";

export interface ItemEntryProps extends PropsWithChildren {
  icon: typeof Icon;
  label: string;
  text?: string;
  copy?: string;
}

export function ItemEntry({
  icon: Icon,
  label,
  text,
  copy,
  children,
}: ItemEntryProps) {
  const labelId = useId();
  return (
    <div aria-labelledby={labelId} className={styles.entry}>
      <Icon className={styles.icon} />
      {text ? (
        <div>
          <div id={labelId} className={styles.label}>
            {label}
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      ) : (
        <div id={labelId} className={styles.label}>
          {label}
        </div>
      )}
      <FlexGrow />
      <div className={styles.children}>
        {children}
        {copy && (
          <IconButton
            icon={CopyIcon}
            aria-label="copy"
            onClick={() => console.log(copy)}
          />
        )}
      </div>
    </div>
  );
}
