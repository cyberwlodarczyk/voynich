import { CATEGORIES, Category } from "../../lib";
import { Chip } from "../styled";
import styles from "./CategoryPicker.module.css";

export interface CategoryPickerProps {
  state: Category;
  setState(state: Category): void;
}

export function CategoryPicker({ setState, state }: CategoryPickerProps) {
  return (
    <div
      role="listbox"
      aria-label="category"
      aria-orientation="horizontal"
      className={styles.categoryPicker}
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
  );
}
