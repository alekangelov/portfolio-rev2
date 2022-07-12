import { Grid, Button } from "components";
import { landing } from "./style.css";

export const Landing = () => {
  return (
    <div className={landing.container}>
      <hgroup>
        <h6 className={landing.sub}>PORTFOLIO rev2 - fixation 3.456</h6>
        <h1 className={landing.title}>
          MIHI PLACET FACERE FRIGUS
          <br />
          <span className={landing.titleMain}>STERCORE</span>
        </h1>
      </hgroup>
      <Grid>
        <Grid.Item>
          <Button>Find out more</Button>
        </Grid.Item>
        <Grid.Item>
          <Button color="transparent">Find out more</Button>
        </Grid.Item>
      </Grid>
    </div>
  );
};
