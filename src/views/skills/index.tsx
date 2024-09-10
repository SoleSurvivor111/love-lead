import React from "react";
import { Section } from "@components/section";
import { StaticImage } from "gatsby-plugin-image";

import * as s from "./styles.module.sass";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <Section rootClassName={s.root} contentClassName={s.content}>
      <>
        <h1 className={s.title}>{t("Чему ты научишься")}</h1>
        <ul className={s.list}>
          <li className={s.item}>
            <StaticImage
              className={s.img}
              src="../../assets/images/fear.png"
              alt={t("страх подхода")}
              width={257}
              height={158}
            />
            <div className={s.textBox}>
              <h2 className={s.subtitle}>
                {t("Избавишься от страха подхода")}
              </h2>
              <p className={s.description}>
                {t(
                  "Избавишься от страха красивых женщин с помощью психологических технологий. Что позволит тебе подходить к девушкам знакомиться и не испытывать негативных чувств."
                )}
              </p>
            </div>
          </li>
          <li className={s.item}>
            <StaticImage
              className={s.img}
              src="../../assets/images/flirt.png"
              alt={t("флирт")}
              width={257}
              height={158}
            />
            <div className={s.textBox}>
              <h2 className={s.subtitle}>
                <b>{t("Флирту с девушками")}</b>
              </h2>
              <p className={s.description}>
                {t(
                  "Флирту с девушками позволит понять, что именно делают женщины и они будут рады тебе."
                )}
              </p>
            </div>
          </li>
          <li className={s.item}>
            <StaticImage
              className={s.img}
              src="../../assets/images/state.png"
              alt={t("состояние")}
              width={257}
              height={158}
            />
            <div className={s.textBox}>
              <h2 className={s.subtitle}>
                {t("Внутреннему состоянию и поведению")}
              </h2>
              <p className={s.description}>
                {t(
                  "Внутреннему состоянию и поведению девушек позволят понять, что делают и они будут рады тебе."
                )}
              </p>
            </div>
          </li>
        </ul>
      </>
    </Section>
  );
};
