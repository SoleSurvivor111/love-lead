import React from "react";
import { Section } from "@components/section";

import * as s from "./styles.module.sass";

export const Goal = () => {
  return (
    <Section rootClassName={s.root} contentClassName={s.content}>
      <>
        <h1 className={s.title}>Счётчик соблазнения*</h1>
        <div className={s.counterBox}>
          <p className={s.counterValue}>
            85 <span>/ 1000</span>
          </p>
        </div>

        <p className={s.goal}>
          Цель - тысяча отчетов о соблазнении в нашем чате #LL
        </p>
      </>
    </Section>
  );
};
