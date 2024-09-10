import * as React from "react";
import { graphql } from "gatsby";
import type { HeadFC, HeadProps, PageProps } from "gatsby";
import { Layout } from "@components/layout";
import { Goal } from "@views/goal";
import { Report } from "@views/report";
import { About } from "@views/about";
import { Phrase } from "@views/phrase";
import { ReportGallery } from "@views/reports-gallery";
import { Peculiarities } from "@views/peculiarities";
import { Skills } from "@views/skills";
import { Guide } from "@views/guide";
import { Footer } from "@views/footer";
import { Team } from "@views/team";
import { Trans } from "react-i18next";
import useHeadTranslation from "@hooks/use-head-transition";

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
  );
};

export default IndexPage;

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
`;

export const Head: HeadFC = ({ data, pageContext }: any) => {
  const { t } = useHeadTranslation(data);
  debugger;
  return (
    <>
      <html lang={pageContext.language} />
      <title>{t("Love Lead|Пикап")}</title>;
    </>
  );
};
