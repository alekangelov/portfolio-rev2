import { Logo } from "@components";
import { ForwardedRef, forwardRef, PropsWithChildren, useState } from "react";
import { navbar } from "./style.css";
import { scroll, ThemeStore } from "@stores";
import clsx from "clsx";
import { useEventListener } from "usehooks-ts";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { generateClick } from "@utils";

type M = {
  href: string;
  active?: boolean;
};
// eslint-disable-next-line react/display-name
// const MenuLink = forwardRef(
//   (
//     {
//       href,
//       active,
//       children,
//       ...props
//     }: PropsWithChildren<M & JSX.IntrinsicElements["li"]>,
//     ref: ForwardedRef<HTMLLIElement>
//   ) => {
//     const onClick = () => {
//       const elementToScrollTo = document.querySelector(`#${href}`);
//       if (!elementToScrollTo) return;
//       const pos = findPosition(elementToScrollTo);
//       window.scroll(0, pos.top);
//     };
//     useEventListener(
//       "scroll",
//       () => {
//         console.log("it's scrolling");
//       },
//       undefined,
//       { passive: true }
//     );
//     return (
//       <li ref={ref} className={navbar.nav.item} {...props}>
//         <a
//           onClick={onClick}
//           color="transparent"
//           className={clsx({
//             [navbar.nav.link]: true,
//             // ["active"]: pathname.includes(href),
//           })}
//         >
//           {children}
//         </a>
//       </li>
//     );
//   }
// );
const selector = (store: ThemeStore) => {
  return {
    theme: store.theme,
    toggle: store.setTheme,
  };
};
// export const Menu = () => {
//   // const { theme, toggle } = useTheme(selector);
//   return (
//     <>
//       <ul className={navbar.nav.wrapper}>
//         <MenuLink href="about">About</MenuLink>
//         <MenuLink href="projects">Projects</MenuLink>
//         <MenuLink href="blog">Blog</MenuLink>
//         <MenuLink href="contact">Contact</MenuLink>
//         {/* <li>
//           <Switch
//             value={theme}
//             icons={[<MdDarkMode />, <MdLightMode />]}
//             onChange={toggle}
//             options={["light", "dark"]}
//           />
//         </li> */}
//       </ul>
//     </>
//   );
// };

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
        // [navbar.scrolled]: scroll > 100,
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
