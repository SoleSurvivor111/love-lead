import { Section } from '@components/section'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import { Trans, useTranslation } from 'react-i18next'
import * as s from './styles.module.sass'

export const Guide = () => {
  const { t } = useTranslation()
  return (
    <Section id="book" contentClassName={s.content}>
      <>
        <h1 className={s.title}>
          <Trans>
            <b>
              Как соблазнить
              <br />
              девушку?
            </b>
          </Trans>
        </h1>
        <StaticImage
          src="../../assets/images/manual.png"
          alt="гайд"
          width={760}
          height={566}
        />
        <a
          href="https://t.me/loveleadcoaching/58"
          target="_blank"
          rel="noopener"
          className="tg-link"
        >
          {t('Забирай книгу бесплатно')}
        </a>
      </>
    </Section>
  )
}
