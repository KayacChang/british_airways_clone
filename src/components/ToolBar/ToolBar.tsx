import React, { useState } from "react";
import styles from "./ToolBar.module.scss";
import Form from "./Form";
import Triggers from "./Triggers";

export default function ToolBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.toolbar}>
      {!open && <Triggers onClick={() => setOpen(true)} />}

      {open && <Form onClose={() => setOpen(false)} />}
    </div>
  );
}
