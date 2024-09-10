import React from "react";
import { Section } from "@components/section";
import { LINKS } from "@constants*";

import * as s from "./styles.module.sass";
import { useTranslation } from "react-i18next";

export const ScheduleEvents = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <>
        <h1>{t("Расписание мероприятий")}</h1>{" "}
        <a
          className="tg-link"
          href={LINKS.booktg}
          target="_blank"
          rel="noopener"
        >
          {t("записаться")}
        </a>
      </>
    </Section>
  );
};
