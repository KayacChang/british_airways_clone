import React from "react";
import { VscAccount as Account } from "react-icons/vsc";
import { BsInfoCircleFill as Info } from "react-icons/bs";
import { MdExpandMore as Expand } from "react-icons/md";
import styles from "./Login.module.scss";
import TextField from "./TextField";
import Button from "components/widgets/Button";

export default function Login() {
  const title = `Log in to see your offers and bookings`;
  const hint = `New to ba.com? Register for free`;

  return (
    <form className={styles.login} onSubmit={(e) => e.preventDefault()}>
      <div>
        <Account size={32} />
        <h5>{title}</h5>
      </div>

      <div>
        <TextField className={styles.field} label={"Login ID / Username"} />
        <Info className={styles.info} size={24} />
      </div>

      <div>
        <TextField className={styles.field} label={"PIN / Password"} />
        <Button className={styles.login_btn}>Log in</Button>
      </div>

      <div className={styles.footer}>
        <h5>{hint}</h5>

        <ul>
          <li>Get personal offers</li>
          <li>Manage your bookings in one place</li>
          <li>Save details for easier bookings</li>
        </ul>

        <Button className={styles.register}>Register now</Button>

        <Button className={styles.expand}>
          <Expand size={24} />
          <span>Show More</span>
        </Button>
      </div>
    </form>
  );
}
