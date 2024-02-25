import React from "react";
import { Section } from "@components/section";

import * as s from "./styles.module.sass";

interface IPhraseProps {
  children: any;
}

export const Phrase: React.FC<IPhraseProps> = ({ children }) => {
  return (
    <Section rootClassName={s.root}>
      {
        <>
          <p className={s.text}>
            <strong>{children}</strong>
          </p>
          <p className={s.author}>— Love Lead</p>
        </>
      }
    </Section>
  );
};
