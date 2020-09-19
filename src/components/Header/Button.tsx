import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

type Props = {
  icon?: ReactNode;
  text?: ReactNode;
};
export default function Button({ icon, text }: Props) {
  return (
    <button className={styles.btn}>
      {icon}
      {text}
    </button>
  );
}
