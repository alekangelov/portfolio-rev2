import { Logo, Button, Link, Switch } from "@components";
import { ForwardedRef, forwardRef, PropsWithChildren } from "react";
import { navbar } from "./style.css";
import { MdDarkMode, MdLightMode, MdPalette } from "react-icons/md";
import { ThemeStore, useTheme } from "@stores";
import clsx from "clsx";

type M = {
  onClick?: () => void;
  href: string;
  active?: boolean;
};

// eslint-disable-next-line react/display-name
const MenuLink = forwardRef(
  (
    {
      onClick,
      href,
      active,
      children,
      ...props
    }: PropsWithChildren<M & JSX.IntrinsicElements["li"]>,
    ref: ForwardedRef<HTMLLIElement>
  ) => {
    return (
      <li ref={ref} className={navbar.nav.item} {...props}>
        <a
          color="transparent"
          onClick={onClick}
          className={clsx({
            [navbar.nav.link]: true,
            // ["active"]: pathname.includes(href),
          })}
        >
          {children}
        </a>
      </li>
    );
  }
);
const selector = (store: ThemeStore) => {
  return {
    theme: store.theme,
    toggle: store.setTheme,
  };
};
export const Menu = () => {
  const { theme, toggle } = useTheme(selector);
  return (
    <>
      <ul className={navbar.nav.wrapper}>
        <MenuLink href="/about">About</MenuLink>
        <MenuLink href="/projects">Projects</MenuLink>
        <MenuLink href="/blog">Blog</MenuLink>
        <MenuLink href="/contact">Contact</MenuLink>
        {/* <li>
          <Switch
            value={theme}
            icons={[<MdDarkMode />, <MdLightMode />]}
            onChange={toggle}
            options={["light", "dark"]}
          />
        </li> */}
      </ul>
    </>
  );
};

export const Navbar = () => {
  return (
    <nav className={navbar.wrapper}>
      <div className={navbar.container}>
        <a className={navbar.title}>
          <span role="icon">
            <Logo onColor="surface" />
          </span>
          ALKNGLV
        </a>
        <Menu />
      </div>
    </nav>
  );
};
