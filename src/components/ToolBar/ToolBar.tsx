import React, { ReactNode, useState } from "react";
import styles from "./ToolBar.module.scss";
import Form from "./Form";
import Triggers from "./Triggers";
import anime from "animejs";
import { MdFlight as Flight, MdAccessTime as Time } from "react-icons/md";
import { BiCheck as Check } from "react-icons/bi";
import { allPass, pipe, times, trim, when } from "ramda";
import Select from "components/widgets/Select";
import TextField from "components/widgets/TextField";
import Button from "components/widgets/Button";
import dayjs, { Dayjs } from "dayjs";

function ManageMyBooking() {
  return (
    <>
      <TextField className={styles.field} label={"Booking reference"} />
      <TextField className={styles.field} label={"Last name of passenger"} />

      <Button className={styles.submit}>Find booking</Button>
    </>
  );
}

function CheckIn() {
  return (
    <>
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
      <AircodeField />
      <SelectDepart />
      <SelectWeek now={dayjs()} />

      <Button className={styles.submit}>Find flight</Button>
    </>
  );
}

type IconProps = {
  view: ReactNode;
};
function Icon({ view }: IconProps) {
  return <div className={styles.icon}>{view}</div>;
}

type Item = {
  icon: ReactNode;
  title: string;
  view: ReactNode;
};
const lists = [
  {
    icon: <Icon view={<Flight size={18} />} />,
    title: "Manage My Booking",
    view: <ManageMyBooking />,
  },
  {
    icon: <Icon view={<Check size={18} />} />,
    title: "Check in",
    view: <CheckIn />,
  },
  {
    icon: <Icon view={<Time size={28} />} />,
    title: "Check flight status",
    view: <CheckFlightStatus />,
  },
];

export default function ToolBar() {
  const [item, setItem] = useState<Item>();

  function tween(ref: HTMLDivElement) {
    if (!ref) return;

    anime({
      targets: ref,
      backgroundColor: item ? "#192e4d" : "#ffffff",
      easing: "easeOutExpo",
      duration: 3000,
    });
  }

  return (
    <div className={styles.toolbar} ref={tween}>
      {!item && <Triggers lists={lists} onClick={setItem} />}

      {item && <Form item={item} onClose={() => setItem(undefined)} />}
    </div>
  );
}
