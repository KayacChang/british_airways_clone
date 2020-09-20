import React, { ReactNode } from "react";
import { BiLeftArrowAlt as BackIcon } from "react-icons/bi";
import styles from "./Form.module.scss";
import anime from "animejs";

type FormProps = {
  children?: ReactNode;
  onClose: () => void;
};
export default function Form({ onClose, children }: FormProps) {
  function tween(ref: HTMLFormElement) {
    if (!ref) return;

    anime({
      targets: ref,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 3000,
    });
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => e.preventDefault()}
      ref={tween}
    >
      <button className={styles.back} onClick={onClose} type={"button"}>
        <BackIcon size={24} />
      </button>

      <div className={styles.content}>{children}</div>
    </form>
  );
}
