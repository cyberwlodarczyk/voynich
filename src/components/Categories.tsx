import styles from "./Categories.module.css";
import { CATEGORIES, Category } from "../lib";
import { Chip } from "./styled";

export interface CategoriesProps {
  state: Category;
  onUpdate(state: Category): void;
}

export function Categories({ onUpdate, state }: CategoriesProps) {
  return (
    <div
      role="listbox"
      aria-label="category"
      aria-orientation="horizontal"
      className={styles.container}
    >
      {CATEGORIES.map((category, index) => (
        <Chip
          role="option"
          tabIndex={0}
          key={index}
          aria-selected={state === category}
          onClick={() => onUpdate(category)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onUpdate(category);
            }
          }}
        >
          {category}
        </Chip>
      ))}
    </div>
  );
}
