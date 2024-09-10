import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Section } from "@components/section";

import * as s from "./styles.module.sass";
import { useTranslation } from "gatsby-plugin-react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <Section contentClassName={s.content}>
      <>
        <h1 className={s.title}>{t("О проекте")}</h1>
        <div className={s.aboutBox}>
          <p className={s.description}>
            {t(
              "Привет! Я – Георгий(LL), основатель проекта Love Lead. 15 лет в теме пикапа, мастер в соблазнении и отношениях. В своем подходе опираюсь на научный метод и практический опыт. Обучил сотни парней и продолжаю это делать каждый день. Главный принцип проекта - эффективный минимализм: не делать то, что не ведет к цели. Или, как говорю я - бить сразу в сердце. Вливайся в тусовку!"
            )}
          </p>
          <StaticImage
            class={s.creatorAvatar}
            src="../../assets/images/love-lead-creator.png"
            alt={t("Создатель проекта Love Lead Георгий(LL)")}
          />
        </div>
      </>
    </Section>
  );
};
