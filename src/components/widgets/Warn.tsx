import React from "react";
import { BsInfoCircle as Info } from "react-icons/bs";
import styles from "./Warn.module.scss";

export default function Warn() {
  return (
    <div className={styles.warn}>
      <div className={styles.body}>
        <Info size={42} />
        <h5>
          Coronavirus | Travel and service updates and the latest advice on
          Portugal and other countries.
        </h5>
      </div>
      <div className={styles.footer}>
        <a href="/">Find out more</a>
      </div>
    </div>
  );
}
