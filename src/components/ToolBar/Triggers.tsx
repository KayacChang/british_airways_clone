import React, { ReactNode } from "react";
import { MdFlight as Flight, MdAccessTime as Time } from "react-icons/md";
import { BiCheck as Check } from "react-icons/bi";
import styles from "./Triggers.module.scss";
import clsx from "clsx";

type IconProps = {
  view: ReactNode;
};
function Icon({ view }: IconProps) {
  return <div className={styles.icon}>{view}</div>;
}

type TriggerProps = {
  children: ReactNode;
};
function Trigger({ children }: TriggerProps) {
  return (
    <button className={clsx(styles.trigger, styles.hover)}>{children}</button>
  );
}

type TriggersProps = {
  onClick: () => void;
};
export default function Triggers({ onClick }: TriggersProps) {
  return (
    <div className={styles.triggers} onClickCapture={onClick}>
      <Trigger>
        <Icon view={<Flight size={18} />} />
        <span>Manage My Booking</span>
      </Trigger>

      <Trigger>
        <Icon view={<Check size={18} />} />
        <span>Check in</span>
      </Trigger>

      <Trigger>
        <Icon view={<Time size={28} />} />
        <span>Check flight status</span>
      </Trigger>
    </div>
  );
}
