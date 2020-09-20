import React from "react";
import Book from "components/Book";
import ToolBar from "components/ToolBar";
import styles from "./Home.module.scss";
import { Warn, Login } from "components/widgets";

export default function Home() {
  return (
    <main>
      <Book />
      <ToolBar />

      <div className={styles.page}>
        <div>
          <Warn />
        </div>

        <div>
          <Login />
        </div>
      </div>
    </main>
  );
}
