import React, { ReactNode } from "react";
import styles from "./Triggers.module.scss";
import clsx from "clsx";
import anime from "animejs";

type TriggerProps = {
  children: ReactNode;
  onClick: () => void;
};
function Trigger({ children, onClick }: TriggerProps) {
  return (
    <button className={clsx(styles.trigger, styles.hover)} onClick={onClick}>
      {children}
    </button>
  );
}

type Item = {
  icon: ReactNode;
  title: string;
  view: ReactNode;
};
type TriggersProps = {
  lists: Item[];
  onClick: (item: Item) => void;
};
export default function Triggers({ lists, onClick }: TriggersProps) {
  function tween(ref: HTMLDivElement) {
    if (!ref) return;

    anime({
      targets: ref.children,
      opacity: [0, 1],
      easing: "easeOutExpo",
      delay: anime.stagger(400),
    });
  }

  return (
    <div className={styles.triggers} ref={tween}>
      {lists.map(({ icon, title, view }) => (
        <Trigger key={title} onClick={() => onClick({ icon, title, view })}>
          {icon}
          <span>{title}</span>
        </Trigger>
      ))}
    </div>
  );
}
