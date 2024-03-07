import React from "react";
import { Section } from "@components/section";
import ScienceIcon from "@assets/icons/science.svg";
import PersonalExampleIcon from "@assets/icons/personal-example.svg";
import OpennessIcon from "@assets/icons/openness.svg";

import * as s from "./styles.module.sass";

const peculiarities = [
  {
    Icon: ScienceIcon,
    title: "По науке",
    description:
      "В основе научные факты, а не домыслы в области эволюции, размножения, отношений",
  },
  {
    Icon: PersonalExampleIcon,
    title: "Личный пример",
    description:
      "Все, чему мы учим, демонстрируем лично на тренингах в поле и в переписках с девушками",
  },
  {
    Icon: OpennessIcon,
    title: "Открытость",
    description:
      "Всегда на связи и отвечаем всем. Любим дискуссии и аргументировано поспорить",
  },
];

export const Peculiarities = () => {
  return (
    <Section contentClassName={s.content}>
      <>
        <h1 className={s.title}>Особенности нашего подхода</h1>
        <ul className={s.list}>
          {peculiarities.map(({ title, description, Icon }) => (
            <li key={title} className={s.item}>
              <Icon className={s.icon} />
              <div>
                <h2 className={s.subtitle}>{title}</h2>
                <p className={s.description}>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    </Section>
  );
};
