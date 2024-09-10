import React from "react";
import { Section } from "@components/section";
import { useTranslation } from "gatsby-plugin-react-i18next";

import * as s from "./styles.module.sass";

export const Goal = () => {
  const { t } = useTranslation();
  return (
    <Section rootClassName={s.root} contentClassName={s.content}>
      <>
        <h1 className={s.title}>{t("Счётчик соблазнения*")}</h1>
        <div className={s.counterBox}>
          <p className={s.counterValue}>
            150 <span>/ 1000</span>
          </p>
        </div>

        <p className={s.goal}>
          {t("Цель - тысяча отчетов о соблазнении в нашем чате #LL")}
        </p>
      </>
    </Section>
  );
};
