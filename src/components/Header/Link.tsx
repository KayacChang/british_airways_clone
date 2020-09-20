import React from "react";
import styles from "./Link.module.scss";

type Props = {
  href?: string;
  label: string;
};

export default function Link({ href = "/", label }: Props) {
  return (
    <a className={styles.link} href={href}>
      {label}
    </a>
  );
}
