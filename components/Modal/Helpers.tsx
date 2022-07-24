import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const portalElement = document.querySelector("#portal");

export const Portal = ({ children }: PropsWithChildren<unknown>) => {
  if (!portalElement) return null;
  return createPortal(children, portalElement);
};
