import React, { ChangeEvent } from "react";
import styles from "./TextField.module.scss";

type Props = {
  name?: string;
  label: string;
  hint?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function TextField({
  label,
  name = label,
  hint = "",
  value = "",
  onChange = () => {},
}: Props) {
  return (
    <div className={styles.textfield}>
      <input
        type="text"
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={name}>
        {label}

        <span>{hint}</span>
      </label>
    </div>
  );
}
