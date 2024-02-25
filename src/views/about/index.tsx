import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Section } from "@components/section";

import * as s from "./styles.module.sass";

export const About = () => {
  return (
    <Section contentClassName={s.content}>
      <>
        <h1 className={s.title}>О проекте</h1>
        <div className={s.aboutBox}>
          <p className={s.description}>
            Привет! Я&nbsp;&mdash; Георгий(LL), основатель проекта Love
            Lead.&nbsp;15&nbsp;лет в&nbsp;теме пикапа, мастер в&nbsp;соблазнении
            и&nbsp;отношениях. В&nbsp;своем подходе опираюсь на&nbsp;научный
            метод и&nbsp;практический опыт. Обучил сотни парней и&nbsp;продолжаю
            это делать каждый день.{" "}
            <strong>
              Главный принцип проекта&nbsp;&mdash; эффективный минимализм:
              не&nbsp;делать&nbsp;то, что не&nbsp;ведет к&nbsp;цели. Или, как
              говорю я&nbsp;&mdash; бить сразу в&nbsp;сердце.
            </strong>{" "}
            Вливайся в&nbsp;тусовку!
          </p>
          <StaticImage
            class={s.creatorAvatar}
            src="../../assets/images/love-lead-creator.png"
            alt="Создатель проекта Love Lead Георгий(LL)"
          />
        </div>
      </>
    </Section>
  );
};
