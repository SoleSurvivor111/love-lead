import { ReactComponent as HearthIcon } from '@assets/icons/hearth.svg'
import { ReactComponent as LoveLeadLogoIcon } from '@assets/icons/love-lead-logo.svg'
import React from 'react'

import * as s from './styles.module.sass'

import { LanguageDropdown } from '@components/language-dropdown'
import { LINKS } from '@constants'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t } = useTranslation()
  return (
    <header className={s.root}>
      <div className={s.content}>
        <div className={s.logoBox}>
          <LoveLeadLogoIcon />
          <p>LOVE LEAD</p>
        </div>
        <div className={s.courseBox}>
          <HearthIcon />
          <p>{t('Курс по пикапу')}</p>
        </div>
        <a className={s.link} href={LINKS.courses}>
          <button className={s.startLearn}>{t('Начать обучение')}</button>
        </a>
        <nav className={s.nav}>
          <ul>
            <li className={s.link}>
              <a href={LINKS.tgChannel}>{t('tg-канал')}</a>
            </li>
            <li className={s.link}>
              <a href={LINKS.book}>{t('руководство')}</a>
            </li>
            <li className={s.link}>
              <a href={LINKS.loveLeadChat}>{t('чат')}</a>
            </li>
          </ul>
        </nav>
        <div className={s.languageDropdown}>
          <LanguageDropdown />
        </div>
      </div>
    </header>
  )
}
