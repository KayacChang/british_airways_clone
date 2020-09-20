import clsx from "clsx";
import useDevice from "hooks/useDevice";
import React, { ReactNode } from "react";
import { BsInfoCircle as Info } from "react-icons/bs";
import styles from "./Warn.module.scss";

type Props = {
  body?: ReactNode;
  footer?: ReactNode;
};
function Mobile({ body, footer }: Props) {
  return (
    <div className={clsx(styles.warn, styles.mobile)}>
      <div>
        <Info size={42} />
        {body}
      </div>
      <div>{footer}</div>
    </div>
  );
}

function Desktop({ body, footer }: Props) {
  return (
    <div className={clsx(styles.warn, styles.desktop)}>
      <Info size={42} />
      <div>
        {body}
        {footer}
      </div>
    </div>
  );
}

export default function Warn() {
  const text = `Coronavirus | Travel and service updates and the latest advice on Portugal and other countries.`;
  const footer = `Find out more`;
  const isMobile = useDevice("mobile");

  return isMobile ? (
    <Mobile body={<h5>{text}</h5>} footer={<a href="/">{footer}</a>} />
  ) : (
    <Desktop body={<h5>{text}</h5>} footer={<a href="/">{footer}</a>} />
  );
}
