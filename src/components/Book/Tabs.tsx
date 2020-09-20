import React, { ReactNode } from "react";
import { MdLocalAirport as Flight, MdHotel as Hotel } from "react-icons/md";
import { FaCarSide as Car } from "react-icons/fa";
import clsx from "clsx";
import styles from "./Tabs.module.scss";

type TabProps = {
  className?: string;
  children: ReactNode;
};
function Tab({ children, className }: TabProps) {
  return <button className={clsx(styles.tab, className)}>{children}</button>;
}

export default function Tabs() {
  const size = 28;

  return (
    <div className={styles.tabs}>
      <Tab className={styles.active}>
        <Flight size={size} />
        Flight
      </Tab>
      <Tab>
        <Hotel size={size} />
        Flight + Hotel
      </Tab>
      <Tab>
        <Car size={size} />
        Fligth + Car
      </Tab>
    </div>
  );
}
