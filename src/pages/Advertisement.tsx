import Button from "components/widgets/Button";
import Card from "components/widgets/Card";
import React from "react";

type Item = {
  title?: string;
  sub?: boolean;
  content?: string;
  money?: string;
  hint?: string;
  button?: string;
};
function Group({ title, sub, content, money, hint, button }: Item) {
  return (
    <div>
      {title && !sub && <h2>{title}</h2>}
      {title && sub && <h5>{title}</h5>}

      {content && <p>{content}</p>}

      {money && (
        <p>
          from <span>{money}</span> pp
        </p>
      )}

      {hint && <span>{hint}</span>}

      {button && <Button>{button}</Button>}
    </div>
  );
}

type Props = {
  data: {
    img: string;
    items: Item[];
    hint?: string;
  };
};
export default function Advertisement({ data }: Props) {
  const { img, items, hint } = data;

  return (
    <Card
      header={<img src={img} alt={img} />}
      body={
        <>
          {items.map(({ title, sub, content, money, hint, button }, idx) => (
            <Group
              key={String(idx)}
              title={title}
              sub={sub}
              content={content}
              money={money}
              hint={hint}
              button={button}
            />
          ))}
        </>
      }
      footer={hint && <span>{hint}</span>}
    />
  );
}
