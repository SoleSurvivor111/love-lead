import React from "react";
import { Section } from "@components/section";
import { StaticImage } from "gatsby-plugin-image";

import * as s from "./styles.module.sass";

export const Skills = () => {
  return (
    <Section rootClassName={s.root} contentClassName={s.content}>
      <>
        <h1 className={s.title}>Чему ты научишься</h1>
        <ul className={s.list}>
          <li className={s.item}>
            <StaticImage
              src="../../assets/images/fear.png"
              alt="страх подхода"
              width={257}
              height={158}
            />
            <div className={s.textBox}>
              <h2 className={s.subtitle}>Избавишься от страха подхода</h2>
              <p className={s.description}>
                Избавишься от страха красивых женщин с помощью психологических
                технологий. Что позволит тебе подходить к девушкам знакомиться и
                не испытывать негативных чувств.
              </p>
            </div>
          </li>
          <li className={s.item}>
            <StaticImage
              src="../../assets/images/flirt.png"
              alt="страх подхода"
              width={257}
              height={158}
            />
            <div className={s.textBox}>
              <h2 className={s.subtitle}>Флирту с девушками</h2>
              <p className={s.description}>
                Мы научим тебя эмоционально и интересно общаться с ними.
                Девушкам никогда не будет с тобой скучно.
              </p>
            </div>
          </li>
          <li className={s.item}>
            <StaticImage
              src="../../assets/images/state.png"
              alt="страх подхода"
              width={257}
              height={158}
            />
            <div className={s.textBox}>
              <h2 className={s.subtitle}>Внутреннему состоянию и поведению</h2>
              <p className={s.description}>
                Правильный настрой притягивает женщин, как магнит. Круто быть
                привлекательным не только, когда ты используешь какую то
                методику. А везде, где ты просто находишься.
              </p>
            </div>
          </li>
        </ul>
      </>
    </Section>
  );
};
