import React, { ChangeEvent } from "react";
import clsx from "clsx";
import styles from "./TextField.module.scss";

type Props = {
  name?: string;
  label: string;
  hint?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function TextField({
  label,
  name = label,
  hint = "",
  value = "",
  onChange = () => {},
  className,
}: Props) {
  return (
    <div className={clsx(styles.textfield, className)}>
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
