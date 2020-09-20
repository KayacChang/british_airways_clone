import React, { ReactNode, useState } from "react";
import styles from "./ToolBar.module.scss";
import Form from "./Form";
import Triggers from "./Triggers";
import anime from "animejs";
import { MdFlight as Flight, MdAccessTime as Time } from "react-icons/md";
import { BiCheck as Check } from "react-icons/bi";
import { allPass, pipe, times, trim, when, __ } from "ramda";
import Select from "components/widgets/Select";
import TextField from "components/widgets/TextField";
import Button from "components/widgets/Button";
import dayjs, { Dayjs } from "dayjs";

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

function SelectDepart() {
  const options = ["Departing", "Arriving"];
  const [value, setValue] = useState(options[0]);

  return <Select value={value} onSelect={setValue} options={options} />;
}

type SelectWeekProps = {
  now: Dayjs;
};
function SelectWeek({ now }: SelectWeekProps) {
  const options = [
    now.clone().subtract(1, "day"),
    ...times(() => now.clone(), 11).map((now, idx) => now.add(idx, "day")),
  ].map((now) => now.format("ddd DD MMM"));

  const [value, setValue] = useState(options[0]);

  return <Select value={value} onSelect={setValue} options={options} />;
}

const lessThan4 = (str: string) => str.length <= 4;
const isNumber = (str: string) => !isNaN(+str);
const cond = allPass([lessThan4, isNumber]);

function AircodeField() {
  const [code, setCode] = useState("");

  return (
    <TextField
      className={styles.field}
      label={"BA"}
      value={code}
      placeholder={"0000"}
      onChange={(e) => pipe(trim, when(cond, setCode))(e.target.value)}
    />
  );
}

function CheckFlightStatus() {
  return (
    <>
      <span>Check flight status</span>

      <AircodeField />
      <SelectDepart />
      <SelectWeek now={dayjs()} />

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
  const [view, setView] = useState<ReactNode>();

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
