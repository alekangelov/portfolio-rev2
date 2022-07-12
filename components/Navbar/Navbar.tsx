import { Logo } from "components/Logo";
import { ForwardedRef, forwardRef, PropsWithChildren } from "react";
import { navbar } from "./style.css";
import { MdDarkMode, MdLightMode, MdPalette } from "react-icons/md";
import { useDarkMode } from "usehooks-ts";
import Link from "next/link";
import { Button } from "components/Button";
import { ThemeStore, useTheme } from "stores/theme";

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
        <Link href={href} passHref>
          <Button
            as="a"
            color="transparent"
            onClick={onClick}
            className={navbar.nav.link}
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
  return (
    <nav className={navbar.wrapper}>
      <div className={navbar.container}>
        <Link href="/" passHref>
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
