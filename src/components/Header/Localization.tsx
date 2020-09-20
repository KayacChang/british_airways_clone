import React from "react";
import styles from "./Localization.module.scss";

function Flag() {
  return (
    <span role="img" aria-label="United Kingdom - English">
      🇬🇧
    </span>
  );
}

export default function Localization() {
  return (
    <span className={styles.localization}>
      <Flag />
      United Kingdom - English
    </span>
  );
}
