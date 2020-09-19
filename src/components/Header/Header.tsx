import React from "react";
import { FiSearch as Search, FiMenu as Menu } from "react-icons/fi";
import { VscAccount as Account } from "react-icons/vsc";
import clsx from "clsx";
import useResize from "hooks/useResize";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import Button from "./Button";
import Link from "./Link";
import Localization from "./Localization";
import Information from "./Information";

export default function Header() {
  const size = 32;

  const [width] = useResize();
  const isMobile = width < 750;

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.group}>
          <Logo />
          {!isMobile && <Information />}
        </div>

        <div className={clsx(styles.group, styles.align_end)}>
          <Button icon={<Search size={size} />} />

          {!isMobile && (
            <Button icon={<Account size={size} />} text={"LOG IN"} />
          )}

          {isMobile && <Button icon={<Menu size={size} />} />}
        </div>
      </div>

      <hr />

      {!isMobile && (
        <div className={styles.bottom}>
          <div className={styles.group}>
            {["Discover", "Book", "Manage", "Help"].map((label) => (
              <Link label={label} />
            ))}
          </div>

          <div className={clsx(styles.group, styles.align_end)}>
            <Localization />
          </div>
        </div>
      )}
    </header>
  );
}
