import React, { useState } from "react";
import LoveLeadLogoIcon from "@assets/icons/love-lead-logo.svg";

import * as s from "./styles.module.sass";
import clsx from "clsx";
import { LINKS } from "@constants";
import { useTranslation } from "react-i18next";

export const MobileHeader = () => {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);

  const { t } = useTranslation();

  return (
    <header className={s.root}>
      <div className={s.logoBox}>
        <LoveLeadLogoIcon />
        <p>LOVE LEAD</p>
      </div>
      <label
        htmlFor="navi-toggle"
        className={s.menuLabel}
        onClick={handleClick}
      >
        <span className={clsx(s.icon, { [s.clicked]: isOpen })}>&nbsp;</span>
      </label>
      <div className={clsx(s.navBackground, { [s.clicked]: isOpen })}>
        &nbsp;
      </div>

      <nav className={clsx(s.navigation, { [s.clicked]: isOpen })}>
        <ul className={s.list}>
          <li>
            <a
              className={s.itemLink}
              onClick={handleClick}
              href={LINKS.courses}
            >
              {t("начать обучение")}
            </a>
          </li>
          <li>
            <a
              className={s.itemLink}
              onClick={handleClick}
              href={LINKS.tgChannel}
            >
              {t("tg-канал")}
            </a>
          </li>
          <li>
            <a className={s.itemLink} onClick={handleClick} href={LINKS.book}>
              {t("руководство")}
            </a>
          </li>
          <li>
            <a
              className={s.itemLink}
              onClick={handleClick}
              href={LINKS.loveLeadChat}
            >
              {t("чат")}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
