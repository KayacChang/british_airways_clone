import React, { ReactNode } from "react";
import TextField from "./TextField";
import styles from "./Form.module.scss";
import { VscAccount as Account } from "react-icons/vsc";
import { IoIosSearch as SearchIcon } from "react-icons/io";
import clsx from "clsx";
import Button from "./Button";

function Title() {
  return (
    <div className={styles.title}>
      <h5>Flights</h5>
      <a href="/">{"Multi City & Round the World"}</a>
    </div>
  );
}

type Props = {
  children: ReactNode;
  className?: string;
};
function Trigger({ children, className }: Props) {
  return (
    <button className={clsx(styles.trigger, className)}>{children}</button>
  );
}

export default function Form() {
  return (
    <form className={styles.form}>
      <Title />

      <TextField label={"From"} hint={"type 3 letters"} />
      <TextField label={"To"} hint={"type 3 letters"} />

      <div className={styles.group}>
        <Trigger className={styles.vertical}>
          <span>Outbound</span>
          <span className={styles.bigger}>19</span>
          <span>September</span>
        </Trigger>

        <Trigger className={styles.vertical}>
          <span>Add a return</span>
          <span className={styles.bigger}>+</span>
        </Trigger>
      </div>

      <div className={styles.group}>
        <Trigger className={styles.horizontal}>
          <Account />
          <div className={styles.vertical}>
            <span>Passengers</span>
            <span>1 Adult</span>
          </div>
          <span>{"▾"}</span>
        </Trigger>

        <Trigger className={styles.horizontal}>
          <Account />
          <div className={styles.vertical}>
            <span>Travel class</span>
            <span>Economy</span>
          </div>
          <span>{"▾"}</span>
        </Trigger>
      </div>

      <Button className={styles.search}>
        <SearchIcon size={32} />
      </Button>
    </form>
  );
}