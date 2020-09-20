import React from "react";
import Book from "components/Book";
import ToolBar from "components/ToolBar";
import styles from "./Home.module.scss";
import { Warn } from "components/widgets";

export default function Home() {
  return (
    <main>
      <Book />
      <ToolBar />

      <div className={styles.page}>
        <Warn />
      </div>
    </main>
  );
}
