import React from "react";
import LoveLeadLogoIcon from "@assets/icons/love-lead-logo.svg";
import TelegramIcon from "@assets/icons/telegram.svg";

import { LINKS } from "@constants";

import * as s from "./styles.module.sass";

export const Footer = () => {
  return (
    <footer className={s.root}>
      <div className={s.content}>
        <ul className={s.infoList}>
          <li className={s.item}>
            <LoveLeadLogoIcon />
            <p className={s.logoLabel}>LOVE LEAD</p>
          </li>
          <li className={s.item}>
            <a className={s.link} href={LINKS.loveLeadChat}>
              Наш группа
            </a>
            <TelegramIcon />
          </li>
        </ul>
        <div className={s.infoBox}>
          <p className={s.copyright}>© All rights reserved</p>
          <a
            href={LINKS.designer}
            target="_blank"
            rel="noopener"
            className={s.designerLink}
          >
            design by Yuri S
          </a>
        </div>
      </div>
    </footer>
  );
};
