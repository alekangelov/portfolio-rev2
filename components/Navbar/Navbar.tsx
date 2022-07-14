import { Logo, Button, Link } from "@components";
import { ForwardedRef, forwardRef, PropsWithChildren } from "react";
import { navbar } from "./style.css";
import { MdDarkMode, MdLightMode, MdPalette } from "react-icons/md";
import { ThemeStore, useTheme } from "@stores";
import { useLocation } from "react-router-dom";
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
    const { pathname } = useLocation();

    return (
      <li ref={ref} className={navbar.nav.item} {...props}>
        <Link to={href}>
          <Button
            as="a"
            color="transparent"
            onClick={onClick}
            className={clsx({
              [navbar.nav.link]: true,
              ["active"]: pathname.includes(href),
            })}
          >
            {children}
          </Button>
        </Link>
      </li>
    );
  }
);
const selector = (store: ThemeStore) => {
  return {
    theme: store.theme,
    toggle: store.toggleTheme,
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
        <li>
          <button onClick={toggle} className={navbar.nav.button}>
            {theme === "system" ? (
              <MdPalette size={16} />
            ) : theme === "dark" ? (
              <MdLightMode size={16} />
            ) : (
              <MdDarkMode size={16} />
            )}
          </button>
        </li>
      </ul>
    </>
  );
};

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className={navbar.wrapper}>
      <div className={navbar.container}>
        <Link to={pathname === "/" ? (undefined as any) : "/"}>
          <a className={navbar.title}>
            <span role="icon">
              <Logo onColor="surface" />
            </span>
            ALKNGLV
          </a>
        </Link>
        <Menu />
      </div>
    </nav>
  );
};
