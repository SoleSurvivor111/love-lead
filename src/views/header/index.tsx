import React from "react";
import LoveLeadLogoIcon from "@assets/icons/love-lead-logo.svg";
import HearthIcon from "@assets/icons/hearth.svg";

import * as s from "./styles.module.sass";

import { LINKS } from "@constants";

export const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <div className={s.logoBox}>
          <LoveLeadLogoIcon />
          <p>Love Lead</p>
        </div>
        <div className={s.courseBox}>
          <HearthIcon />
          <p>Курс по пикапу</p>
        </div>
        <button className={s.startLearn}>Начать обучение</button>
        <nav className={s.nav}>
          <ul>
            <li className={s.link}>
              <a href={LINKS.book}>расписание</a>
            </li>
            <li className={s.link}>
              <a href={LINKS.table}>руководство</a>
            </li>
            <li className={s.link}>
              <a href={LINKS.loveLeadChat} target="_blank" rel="noopener">
                чат
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
