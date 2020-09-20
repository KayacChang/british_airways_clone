import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./TextField.module.scss";

type Props = {
  name?: string;
  label: string;
  hint?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function TextField({
  label,
  name = label,
  hint = "",
  value,
  className,
  ...rest
}: Props) {
  return (
    <div
      className={clsx(
        styles.textfield,
        Boolean(value) && styles.active,
        className
      )}
    >
      <input name={name} id={name} value={value} {...rest} />
      <label htmlFor={name}>
        {label}
        <span>{hint}</span>
      </label>
    </div>
  );
}
