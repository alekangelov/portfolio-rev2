import { Children, cloneElement } from "react";
import { LinkProps, useLocation, useNavigate } from "react-router-dom";

export const Link = ({ to, children, ...rest }: LinkProps) => {
  const navigate = useNavigate();
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };
  if (Children.count(children) !== 1) {
    throw new Error("Link must have exactly one child");
  }
  return cloneElement(children as any, {
    ...rest,
    href: to,
    onClick: handleClick,
  });
};
