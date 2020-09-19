import clsx from "clsx";
import React, { ChangeEvent, ReactNode } from "react";
import styles from "./TextField.module.scss";

type Props = {
  label: string;
  name?: string;
  icon?: ReactNode;
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function TextField({
  icon,
  label,
  name = label,
  className,
  value = "",
  onChange = () => {},
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
      <label htmlFor={name} className={clsx(value && styles.active)}>
        {label}
      </label>

      {icon && <button>{icon}</button>}
    </div>
  );
}
