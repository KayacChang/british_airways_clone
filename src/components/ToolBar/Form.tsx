import React, { ReactNode } from "react";
import { BiLeftArrowAlt as BackIcon } from "react-icons/bi";
import styles from "./Form.module.scss";
import anime from "animejs";
import useDevice from "hooks/useDevice";

type Item = {
  icon: ReactNode;
  title: string;
  view: ReactNode;
};
type FormProps = {
  item: Item;
  onClose: () => void;
};
export default function Form({ onClose, item }: FormProps) {
  const isMobile = useDevice("mobile");

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
      <div className={styles.title}>
        <button className={styles.back} onClick={onClose} type="button">
          <BackIcon size={24} />
        </button>

        {isMobile && (
          <div>
            {item.icon}
            <span>{item.title}</span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        {!isMobile && <span>{item.title}</span>}

        {item.view}
      </div>
    </form>
  );
}
