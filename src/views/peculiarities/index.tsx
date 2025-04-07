import { ReactComponent as OpennessIcon } from '@assets/icons/openness.svg'
import { ReactComponent as PersonalExampleIcon } from '@assets/icons/personal-example.svg'
import { ReactComponent as ScienceIcon } from '@assets/icons/science.svg'
import { Section } from '@components/section'
import React from 'react'
import { useTranslation } from 'react-i18next'

import * as s from './styles.module.sass'

const peculiarities = (t: (key: string) => string) => [
  {
    Icon: ScienceIcon,
    title: t('По науке'),
    description: t(
      'В основе научные факты, а не домыслы в области эволюции, размножения, отношений'
    ),
  },
  {
    Icon: PersonalExampleIcon,
    title: t('Личный пример'),
    description: t(
      'Все, чему мы учим, демонстрируем лично на тренингах в поле и в переписках с девушками'
    ),
  },
  {
    Icon: OpennessIcon,
    title: t('Открытость'),
    description: t(
      'Всегда на связи и отвечаем всем. Любим дискуссии и аргументировано поспорить'
    ),
  },
]

export const Peculiarities = () => {
  const { t } = useTranslation()

  return (
    <Section contentClassName={s.content}>
      <>
        <h1 className={s.title}>{t('Особенности нашего подхода')}</h1>
        <ul className={s.list}>
          {peculiarities(t).map(({ title, description, Icon }) => (
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
  )
}
