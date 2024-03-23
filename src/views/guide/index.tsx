import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Section } from "@components/section";

import * as s from "./styles.module.sass";

export const Guide = () => {
  return (
    <Section contentClassName={s.content}>
      <>
        <h1 className={s.title}>
          <b>
            Как соблазнить
            <br />
            девушку?
          </b>
        </h1>
        <StaticImage
          src="../../assets/images/pickup-truck-guide.png"
          alt="гайд"
          width={760}
          height={566}
        />
        <a
          href="https://t.me/loveleadcoaching/58"
          target="_blank"
          rel="noopener"
          className="tg-link"
        >
          Забирай книгу бесплатно
        </a>
      </>
    </Section>
  );
};
