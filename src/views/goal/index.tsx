import { Section } from '@components/section'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import React from 'react'

import * as s from './styles.module.sass'

export const Goal = () => {
  const { t } = useTranslation()
  return (
    <Section rootClassName={s.root} contentClassName={s.content}>
      <>
        <h1 className={s.title}>{t('Счётчик соблазнения*')}</h1>
        <div className={s.counterBox}>
          <p className={s.counterValue}>
            150 <span>/ 1000</span>
          </p>
        </div>

        <p className={s.goal}>
          {t('Цель - тысяча отчетов о соблазнении в нашем чате #LL')}
        </p>
        <StaticImage
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
          }}
          src={'../../assets/images/goal-bg.jpeg'}
          alt={''}
        />
      </>
    </Section>
  )
}
