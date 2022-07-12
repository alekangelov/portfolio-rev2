import { Grid, Button, FullScreen } from "components";
import { landing } from "./style.css";
import { useSpring, a } from "@react-spring/web";
import { useState } from "react";
import { useBoolean } from "usehooks-ts";
const HiddenOnHover = ({
  mainText,
  subText,
  className,
  active,
}: {
  mainText: React.ReactNode;
  subText: React.ReactNode;
  className: string;
  active?: boolean;
}) => {
  const style = useSpring({
    transform: !active ? "translate(0%, 0%)" : "translate(0%, -100%)",
    display: "block",
  });
  return (
    <span className={className}>
      <a.span style={style}>{mainText}</a.span>
      <a.span style={style} className={landing.innerSpan}>
        {subText}
      </a.span>
    </span>
  );
};

export const Landing = () => {
  const { value, setTrue, setFalse } = useBoolean(false);

  return (
    <FullScreen>
      <div className={landing.container}>
        <hgroup
          onMouseEnter={setTrue}
          onMouseLeave={setFalse}
          style={{ width: "100%" }}
        >
          <h6 className={landing.sub}>PORTFOLIO rev2 - fixation 3.456</h6>
          <h1 className={landing.title}>
            <HiddenOnHover
              mainText="MIHI PLACET FACERE FRIGUS"
              subText="I LIKE MAKING REALLY"
              className={landing.firstTitle}
              active={value}
            />
            <HiddenOnHover
              mainText="STERCORE"
              subText="DOPE SHIT"
              className={landing.titleMain}
              active={value}
            />
          </h1>
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
    </FullScreen>
  );
};
