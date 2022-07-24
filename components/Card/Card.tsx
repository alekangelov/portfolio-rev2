import clsx from "clsx";
import { SafeImage } from "components";
import { ComponentProps, PropsWithChildren } from "react";
import { card, arrow } from "./style.css";

export const Card = ({
  ...props
}: PropsWithChildren<unknown> & JSX.IntrinsicElements["div"]) => {
  return <div {...props} className={clsx(card.wrapper, props.className)} />;
};
Card.Image = ({ ...props }: ComponentProps<typeof SafeImage>) => (
  <div className={card.imageWrapper}>
    <SafeImage
      {...props}
      draggable={false}
      className={clsx(card.image, props.className)}
      loading={<SafeImage.Loading />}
      fallback={<SafeImage.Fallback />}
    />
  </div>
);

Card.Title = ({
  ...props
}: PropsWithChildren<unknown> & JSX.IntrinsicElements["h3"]) => (
  <h3 {...props} className={clsx(card.title, props.className)} />
);

Card.Content = ({
  ...props
}: PropsWithChildren<unknown> & JSX.IntrinsicElements["div"]) => (
  <div {...props} className={clsx(card.content, props.className)} />
);

Card.Description = ({
  ...props
}: PropsWithChildren<unknown> & JSX.IntrinsicElements["p"]) => (
  <p {...props} className={clsx(card.description, props.className)} />
);

const Arrow = () => {
  return (
    <div className={arrow.parent}>
      <div className={arrow.line}>
        <div className={arrow.top} />
        <div className={arrow.bottom} />
      </div>
    </div>
  );
};

Card.Link = ({
  ...props
}: PropsWithChildren<unknown> & JSX.IntrinsicElements["a"]) => (
  <a {...props} className={clsx(card.link, props.className)}>
    {props.children}
    <Arrow />
  </a>
);

Card.Tag = ({
  ...props
}: PropsWithChildren<unknown> & JSX.IntrinsicElements["span"]) => (
  <span {...props} className={clsx(card.tag, props.className)} />
);

Card.TagWrapper = ({
  ...props
}: PropsWithChildren<unknown> & JSX.IntrinsicElements["div"]) => (
  <div {...props} className={clsx(card.tagWrapper, props.className)} />
);

Card.ContentTop = ({
  ...props
}: PropsWithChildren<unknown> & JSX.IntrinsicElements["div"]) => (
  <div {...props} className={clsx(card.topContent, props.className)} />
);
