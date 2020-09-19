import React from "react";
import { IoIosSearch as SearchIcon } from "react-icons/io";
import styles from "./Search.module.scss";

export default function Search() {
  return (
    <div className={styles.search}>
      <button className={styles.trigger}>
        Search for a flight
        <SearchIcon size={24} />
      </button>
    </div>
  );
}
