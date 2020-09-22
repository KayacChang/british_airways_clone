import Button from "components/widgets/Button";
import Card from "components/widgets/Card";
import React from "react";

type Item = {
  mainTitle?: string;
  subTitle?: string;
  content?: string;
  money?: string;
  hint?: string;
  button?: string;
};
function Group({ mainTitle, subTitle, content, money, hint, button }: Item) {
  return (
    <div>
      {mainTitle && <h2>{mainTitle}</h2>}
      {subTitle && <h5>{subTitle}</h5>}

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
  img: string;
  items: Item[];
  hint?: string;
};
export default function Advertisement({ img, items, hint }: Props) {
  return (
    <Card
      header={<img src={img} alt={img} />}
      body={
        <>
          {items.map(
            ({ mainTitle, subTitle, content, money, hint, button }) => (
              <Group
                key={mainTitle || subTitle}
                mainTitle={mainTitle}
                subTitle={subTitle}
                content={content}
                money={money}
                hint={hint}
                button={button}
              />
            )
          )}
        </>
      }
      footer={hint && <span>{hint}</span>}
    />
  );
}
