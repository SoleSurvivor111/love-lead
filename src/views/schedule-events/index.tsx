import React from "react";
import { Section } from "@components/section";
import { LINKS } from "@constants*";

import * as s from "./styles.module.sass";

export const ScheduleEvents = () => {
  return (
    <Section>
      <>
        <h1>Расписание мероприятий</h1>{" "}
        <a
          className="tg-link"
          href={LINKS.booktg}
          target="_blank"
          rel="noopener"
        >
          записаться
        </a>
      </>
    </Section>
  );
};
