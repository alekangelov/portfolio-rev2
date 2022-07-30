import { About } from "./About";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { Landing } from "./Landing";
import { Projects } from "./Projects";

export const HtmlPages = () => {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </>
  );
};
