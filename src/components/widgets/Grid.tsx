import React from "react";
import styles from "./Grid.module.scss";

type Item = {
  title: string;
  img: string;
};
function Item({ title, img }: Item) {
  return (
    <a className={styles.item} href={"/"}>
      <div>
        <img src={img} alt={title} />
      </div>

      <h5>{title}</h5>
    </a>
  );
}

type Props = {
  list: Item[];
};
export default function Grid({ list }: Props) {
  return (
    <div className={styles.group}>
      {list.map(({ title, img }) => (
        <Item title={title} img={img} />
      ))}
    </div>
  );
}
