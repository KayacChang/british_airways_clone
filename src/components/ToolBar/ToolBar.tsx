import React, { ReactNode } from "react";
import { MdFlight as Flight, MdAccessTime as Time } from "react-icons/md";
import { HiOutlineCheckCircle as Check } from "react-icons/hi";
import styles from "./ToolBar.module.scss";

type Props = {
  children: ReactNode;
};
function Trigger({ children }: Props) {
  return <button className={styles.trigger}>{children}</button>;
}

export default function ToolBar() {
  const size = 28;

  return (
    <div className={styles.toolbar}>
      <div className={styles.triggers}>
        <Trigger>
          <Flight size={size} />
          <span>Manage My Booking</span>
        </Trigger>
        <Trigger>
          <Check size={size} />
          <span>Check in</span>
        </Trigger>
        <Trigger>
          <Time size={size} />
          <span>Check flight status</span>
        </Trigger>
      </div>
    </div>
  );
}
