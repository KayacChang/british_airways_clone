import React, { ReactNode } from "react";
import styles from "./Triggers.module.scss";
import clsx from "clsx";
import anime from "animejs";

type IconProps = {
  view: ReactNode;
};
function Icon({ view }: IconProps) {
  return <div className={styles.icon}>{view}</div>;
}

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

type TriggersProps = {
  lists: { icon: ReactNode; text: string; view: ReactNode }[];
  onClick: (view: ReactNode) => void;
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
      {lists.map(({ icon, text, view }) => (
        <Trigger key={text} onClick={() => onClick(view)}>
          <Icon view={icon} />
          <span>{text}</span>
        </Trigger>
      ))}
    </div>
  );
}
