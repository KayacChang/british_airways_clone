import React, { ReactNode } from "react";
import styles from "./Card.module.scss";

type Props = {
  header: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
};
export default function Card({ header, body, footer }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{header}</div>

      <div className={styles.body}>{body}</div>

      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}
