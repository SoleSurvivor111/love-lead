import React from "react";
import { Section } from "@components/section";

import * as s from "./styles.module.sass";
import { Trans, useTranslation } from "react-i18next";
import { StaticImage } from "gatsby-plugin-image";

export const Team = () => {
  const { t } = useTranslation();
  return (
    <Section rootClassName={s.root}>
      <>
        <h1 className={s.title}>{t("Команда")}</h1>
        <ul className={s.team}>
          <li className={s.trainer}>
            <StaticImage
              className={s.avatar}
              src={"../../assets/images/team/rus.png"}
              alt={"Руслан пикап-тренер Воронеж"}
            />
            <div>
              <h3 className={s.name}>{t("Руслан")}</h3>
              <p className={s.position}>
                <Trans>
                  пикап-тренер
                  <br />
                  Воронеж
                </Trans>
              </p>
            </div>
          </li>
          <li className={s.trainer}>
            <StaticImage
              className={s.avatar}
              src={"../../assets/images/team/evg.png"}
              alt={"Евгений специалист по страхам"}
            />
            <div>
              <h3 className={s.name}>{t("Евгений")}</h3>
              <p className={s.position}>
                <Trans>
                  специалист
                  <br />
                  по страхам
                </Trans>
              </p>
            </div>
          </li>
        </ul>
      </>
    </Section>
  );
};
