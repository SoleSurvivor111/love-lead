import { Layout } from '@components/layout'
import useHeadTranslation from '@hooks/use-head-transition'
import { About } from '@views/about'
import { Footer } from '@views/footer'
import { Goal } from '@views/goal'
import { Guide } from '@views/guide'
import { Peculiarities } from '@views/peculiarities'
import { Phrase } from '@views/phrase'
import { Report } from '@views/report'
import { ReportGallery } from '@views/reports-gallery'
import { Skills } from '@views/skills'
import { Team } from '@views/team'
import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'
import { Trans } from 'react-i18next'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Goal />
      <Report />
      <About />
      <Team />
      <Phrase>
        <Trans>
          <strong>
            Люди привыкли тратить годы на страдания, вместо того,
            <br /> чтобы найти свою любовь за один вечер
          </strong>
        </Trans>
      </Phrase>
      <ReportGallery />
      <Peculiarities />
      <Skills />
      <Guide />
      <Phrase>
        <Trans>
          <strong>
            Мужчина, который понял флирт, не может не любить женщин
          </strong>
        </Trans>
      </Phrase>
      <Footer />
    </Layout>
  )
}

export default IndexPage

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

export const Head: HeadFC = ({ data, pageContext }: any) => {
  const { t } = useHeadTranslation(data)

  return (
    <>
      <html lang={pageContext.language} />
      <title>{t('Love Lead|Пикап')}</title>;
    </>
  )
}
