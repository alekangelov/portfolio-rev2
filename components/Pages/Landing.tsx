import { Grid, Button, FullScreen } from "@components";
import { landing } from "./style.css";
import { useSpring, a, useTrail } from "@react-spring/web";
import { useBoolean } from "usehooks-ts";
import { memo, useEffect } from "react";
const HiddenOnHover = ({ active }: { active?: boolean }) => {
  const style = useTrail(2, {
    transform: !active ? "translate(0%, 0%)" : "translate(0%, -100%)",
    display: "block",
  });
  return (
    <h1 className={landing.title}>
      <span className={landing.firstTitle}>
        <a.span style={style[0] as any}>MIHI PLACET FACERE FRIGUS</a.span>
        <a.span style={style[0] as any} className={landing.innerSpan}>
          I LIKE MAKING REALLY
        </a.span>
      </span>
      <span className={landing.titleMain}>
        <a.span style={style[1] as any}>STERCORE</a.span>
        <a.span style={style[1] as any} className={landing.innerSpan}>
          DOPE SHIT
        </a.span>
      </span>
    </h1>
  );
};

const randomNum = () => {
  return Math.random() * 10;
};

const Rev = memo(() => {
  return (
    <h6 className={landing.sub}>
      {`PORTFOLIO rev2 - fixv ${randomNum().toFixed(3)}`}
    </h6>
  );
});

export const Landing = () => {
  const { value, toggle } = useBoolean(false);

  return (
    <div className={landing.container}>
      <hgroup onClick={toggle} style={{ width: "100%", userSelect: "none" }}>
        <Rev />
        <HiddenOnHover active={value} />
      </hgroup>
      <Grid>
        <Grid.Item>
          <Button>Find out more</Button>
        </Grid.Item>
        <Grid.Item>
          <Button color="transparent">Contact me</Button>
        </Grid.Item>
      </Grid>
    </div>
  );
};
