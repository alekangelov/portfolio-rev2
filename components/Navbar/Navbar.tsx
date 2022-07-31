import { Logo } from "@components";
import { navbar } from "./style.css";
import clsx from "clsx";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { generateClick } from "@utils";

type P = {
  icon: JSX.Element;
  href: string;
};

const links: P[] = [
  {
    icon: <AiFillLinkedin />,
    href: "https://linkedin.com/in/alekangelov",
  },
  {
    icon: <AiFillGithub />,
    href: "https://github.com/alekangelov",
  },
  {
    icon: <AiFillTwitterCircle />,
    href: "https://twitter.com/goukistrife/",
  },
];

const SingleLink = (props: P) => {
  return (
    <a onClick={generateClick(props.href)} className={navbar.nav.button}>
      {props.icon}
    </a>
  );
};

export const Navbar = () => {
  return (
    <nav
      className={clsx({
        [navbar.wrapper]: true,
      })}
    >
      <div className={navbar.container}>
        <span
          onClick={() => window.scroll({ top: 0 })}
          className={navbar.title}
        >
          <span role="icon">
            <Logo onColor="surface" />
          </span>
          ALKNGLV
        </span>
        <div className={navbar.nav.wrapper}>
          {links.map((link) => (
            <SingleLink key={link.href} {...link} />
          ))}
        </div>
      </div>
    </nav>
  );
};
