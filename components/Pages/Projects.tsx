import { parseColor, vars } from "@styles";
import { projectStyles } from "./style.css";

export const Projects = () => {
  return (
    <div id="projects" className={projectStyles.container}>
      <h3>
        I've done my fair share of projects throughout the years. <br /> Here's
        a{" "}
        <b style={{ fontWeight: 900, color: parseColor(vars.colors.primary) }}>
          {"<ul />"}
        </b>{" "}
        of my work history and some open source projects.
      </h3>
    </div>
  );
};
