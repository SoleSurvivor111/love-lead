import React, { ReactElement } from "react";
import { clsx } from "clsx";

import * as s from "./styles.module.sass";

interface IPsectionProps {
  children: ReactElement;
  rootClassName?: string;
  contentClassName?: string;
}

export const Section: React.FC<IPsectionProps> = ({
  contentClassName,
  rootClassName,
  children,
}) => {
  return (
    <section className={clsx(s.root, rootClassName)}>
      <div className={clsx(s.content, contentClassName)}>{children}</div>
    </section>
  );
};
