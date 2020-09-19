import React from "react";
import Search from "./Search";
import Tabs from "./Tabs";
import styles from "./Book.module.scss";
import Button from "./Button";
import useDevice from "hooks/useDevice";
import Form from "./Form";

function Content() {
  return (
    <div className={styles.content}>
      <h3>1 million seats to Europe for £34 or less each-way</h3>

      <h5>Book by 22 September 2020.</h5>

      <Button>Book your flight</Button>
    </div>
  );
}

export default function Main() {
  const isMobile = useDevice("mobile");

  return (
    <main className={styles.main}>
      <Tabs />

      {isMobile && <Search />}

      {!isMobile && <Form />}

      <Content />
    </main>
  );
}
