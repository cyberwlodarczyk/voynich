import { useId } from "react";
import { CATEGORIES, Category } from "../../lib";
import { Chip } from "../styled";
import styles from "./CategoryPicker.module.css";

export interface CategoryPickerProps {
  state: Category;
  setState(state: Category): void;
}

export function CategoryPicker({ setState, state }: CategoryPickerProps) {
  const labelId = useId();
  return (
    <div>
      <div id={labelId} className={styles.label}>
        category
      </div>
      <div
        role="listbox"
        aria-orientation="horizontal"
        aria-describedby={labelId}
        className={styles.chips}
      >
        {CATEGORIES.map((category, index) => (
          <Chip
            role="option"
            tabIndex={0}
            key={index}
            aria-selected={category === state}
            onClick={() => setState(category)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setState(category);
              }
            }}
          >
            {category}
          </Chip>
        ))}
      </div>
    </div>
  );
}
