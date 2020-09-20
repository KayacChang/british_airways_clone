import React, { useCallback, useState } from "react";
import { MdExpandMore as ExpandIcon } from "react-icons/md";
import styles from "./Select.module.scss";
import clsx from "clsx";

type Props = {
  value?: string;
  options: string[];
  onSelect?: (value: string) => void;
};
export default function Select({
  options,
  value = options[0],
  onSelect = () => {},
}: Props) {
  const [isOpen, setOpen] = useState(false);

  const whenClickOutside = useCallback((ref: HTMLDivElement) => {
    if (!ref) return;

    document.addEventListener("mousedown", (event) => {
      setOpen(ref.contains(event.target as Node));
    });
  }, []);

  return (
    <div ref={whenClickOutside} className={styles.select}>
      <button className={styles.trigger} onClick={() => setOpen(true)}>
        <span>{value}</span>
        <ExpandIcon size={32} />
      </button>

      <div className={clsx(styles.list, isOpen && styles.open)}>
        {options.map((option) => (
          <button
            key={option}
            className={clsx(value === option && styles.active)}
            onClick={() => {
              onSelect(option);
              setOpen(false);
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
