import React, { ReactNode, useState } from "react";
import styles from "./ToolBar.module.scss";
import Form from "./Form";
import Triggers from "./Triggers";
import anime from "animejs";
import TextField from "components/widgets/TextField";
import Button from "components/widgets/Button";
import { MdFlight as Flight, MdAccessTime as Time } from "react-icons/md";
import { BiCheck as Check } from "react-icons/bi";

function ManageMyBooking() {
  return (
    <>
      <span>Manage My Booking</span>

      <TextField className={styles.field} label={"Booking reference"} />
      <TextField className={styles.field} label={"Last name of passenger"} />

      <Button className={styles.submit}>Find booking</Button>
    </>
  );
}

function CheckIn() {
  return (
    <>
      <span>Check in</span>

      <TextField className={styles.field} label={"Booking reference"} />
      <TextField className={styles.field} label={"Last name of passenger"} />

      <Button className={styles.submit}>Start check-in</Button>
    </>
  );
}

function CheckFlightStatus() {
  return (
    <>
      <span>Check flight status</span>

      <TextField className={styles.field} label={"Departing"} />
      <TextField className={styles.field} label={"Sun 20 Sep"} />

      <Button className={styles.submit}>Find flight</Button>
    </>
  );
}

const lists = [
  {
    icon: <Flight size={18} />,
    text: "Manage My Booking",
    view: <ManageMyBooking />,
  },
  {
    icon: <Check size={18} />,
    text: "Check in",
    view: <CheckIn />,
  },
  {
    icon: <Time size={28} />,
    text: "Check flight status",
    view: <CheckFlightStatus />,
  },
];

export default function ToolBar() {
  const [view, setView] = useState<ReactNode>(undefined);

  function tween(ref: HTMLDivElement) {
    if (!ref) return;

    anime({
      targets: ref,
      backgroundColor: view ? "#192e4d" : "#ffffff",
      easing: "easeOutExpo",
      duration: 3000,
    });
  }

  return (
    <div className={styles.toolbar} ref={tween}>
      {!view && <Triggers lists={lists} onClick={setView} />}

      {view && <Form onClose={() => setView(undefined)}>{view}</Form>}
    </div>
  );
}
