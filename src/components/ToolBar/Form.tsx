import React from "react";
import TextField from "components/widgets/TextField";
import Button from "components/widgets/Button";
import { BiLeftArrowAlt as BackIcon } from "react-icons/bi";
import styles from "./Form.module.scss";

type FormProps = {
  onClose: () => void;
};
export default function Form({ onClose }: FormProps) {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <button className={styles.back} onClick={onClose}>
        <BackIcon size={24} />
      </button>

      <div className={styles.content}>
        <span>Manage My Booking</span>

        <TextField className={styles.field} label={"Booking reference"} />
        <TextField className={styles.field} label={"Last name of passenger"} />

        <Button className={styles.submit}>Find booking</Button>
      </div>
    </form>
  );
}
