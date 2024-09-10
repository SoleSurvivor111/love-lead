import React from "react";
import LoveLeadLogoIcon from "@assets/icons/love-lead-logo.svg";
import TelegramIcon from "@assets/icons/telegram.svg";

import { LINKS } from "@constants";

import * as s from "./styles.module.sass";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
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
              {t("Наша группа")}
            </a>
            <TelegramIcon />
          </li>
        </ul>
        <div className={s.infoBox}>
          <p className={s.copyright}>© All rights reserved</p>
          <a
            href={LINKS.designer}
            target="_blank"
            rel="noreferrer"
            className={s.designerLink}
          >
            {t("дизайн Юрия С.")}
          </a>
        </div>
      </div>
    </footer>
  );
};
