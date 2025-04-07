import useHeadTranslation from '@hooks/use-head-transition'
import { HeadFC, Link, PageProps, graphql } from 'gatsby'
import * as React from 'react'
import { Trans, useTranslation } from 'react-i18next'

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
}

const NotFoundPage: React.FC<PageProps> = () => {
  const { t } = useTranslation()
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>{t('Страница не найдена')}</h1>
      <p style={paragraphStyles}>
        {t('Извините 😔, мы не смогли найти то, что вы искали.')}
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <Trans>
            <br />
            Попробуйте создать страницу в{' '}
            <code style={codeStyles}>src/pages/</code>.
            <br />
          </Trans>
        ) : null}
        <br />
        <Link to="/">{t('На главную')}</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export const Head: HeadFC = ({ data }: any) => {
  const { t } = useHeadTranslation(data)

  return <title>{t('Страница не найдена')}</title>
}
