import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

type Props = {
  children?: ReactNode;
  className?: string;
};
export default function Button({ children, className }: Props) {
  return <button className={clsx(styles.button, className)}>{children}</button>;
}
