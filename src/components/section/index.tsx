import React, { ReactElement } from "react";
import { clsx } from "clsx";

import * as s from "./styles.module.sass";

interface IPsectionProps {
  id?: string;
  children: ReactElement;
  rootClassName?: string;
  contentClassName?: string;
}

export const Section: React.FC<IPsectionProps> = ({
  id,
  contentClassName,
  rootClassName,
  children,
}) => {
  return (
    <section className={clsx(s.root, rootClassName)} id={id}>
      <div className={clsx(s.content, contentClassName)}>{children}</div>
    </section>
  );
};
