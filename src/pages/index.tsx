import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "@components/layout";
import { Goal } from "@views/goal";
import { Report } from "@views/report";
import { About } from "@views/about";
import { Phrase } from "@views/phrase";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Goal />
      <Report />
      <About />
      <Phrase>
        Люди привыкли тратить годы на страдания, вместо того,
        <br /> чтобы найти свою любовь за один вечер
      </Phrase>
      <Phrase>Мужчина, который понял флирт, не может не любить женщин</Phrase>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Love Lead|Пикап</title>;
