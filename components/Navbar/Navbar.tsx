import { Logo } from "components/Logo";
import { ForwardedRef, forwardRef, PropsWithChildren } from "react";
import { navbar } from "./style.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "usehooks-ts";

type M = {
  onClick?: () => void;
  href?: string;
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
        <a href={href} className={navbar.nav.link}>
          {children}
        </a>
      </li>
    );
  }
);

export const Menu = () => {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <>
      <ul className={navbar.nav.wrapper}>
        <MenuLink>About</MenuLink>
        <MenuLink>Projects</MenuLink>
        <MenuLink>Blog</MenuLink>
        <MenuLink>Contact</MenuLink>
        <li>
          <button onClick={toggle} className={navbar.nav.button}>
            {isDarkMode ? <MdLightMode size={16} /> : <MdDarkMode size={16} />}
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
        <h3 className={navbar.title}>
          <span role="icon">
            <Logo onColor="surface" />
          </span>
          ALKNGLV
        </h3>
        <Menu />
      </div>
    </nav>
  );
};
