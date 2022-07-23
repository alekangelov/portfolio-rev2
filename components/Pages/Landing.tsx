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
  const [spring, api] = useTrail(3, () => ({
    transform: `translateY(25px)`,
    opacity: 0,
    delay: 0.1,
  }));
  useEffect(() => {
    api.start({
      transform: `translateY(0px)`,
      opacity: 1,
    });
    () =>
      api.set({
        transform: `translateY(25px)`,
        opacity: 0,
      });
  }, []);
  return (
    <div className={landing.container}>
      <a.hgroup
        onClick={toggle}
        style={{ width: "100%", userSelect: "none", ...spring[0] }}
      >
        <Rev />
        <HiddenOnHover active={value} />
      </a.hgroup>
      <Grid>
        <Grid.Item>
          <a.div style={spring[1]}>
            <Button>Find out more</Button>
          </a.div>
        </Grid.Item>
        <Grid.Item>
          <a.div style={spring[2]}>
            <Button color="transparent">Contact me</Button>
          </a.div>
        </Grid.Item>
      </Grid>
    </div>
  );
};
