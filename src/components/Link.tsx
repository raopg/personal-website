import { ReactNode } from "react";

export const Link = ({ to, children }: { to: string; children: ReactNode }) => (
  <a
    className="w-10 h-10 flex justify-center items-center"
    href={to}
    rel="noreferrer noopener"
    target="_blank"
  >
    {children}
  </a>
);
