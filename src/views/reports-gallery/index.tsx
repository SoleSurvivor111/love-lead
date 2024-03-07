import React from "react";
import { Section } from "@components/section";
import { Slider } from "@components/slider";
import { StaticImage } from "gatsby-plugin-image";

import * as s from "./styles.module.sass";

const gallery = [
  {
    id: 1,
    src: "../../../assets/images/love-lead-creator.png",
    alt: "отчёт клуб",
  },
  {
    id: 2,
    src: "../../assets/images/reports/report-photo-2.jpeg",
    alt: "встреча участников марафона 2023 лето в Санкт-Петербурге",
  },
];

export const ReportGallery = () => {
  return (
    <Section rootClassName={s.root} contentClassName={s.content}>
      <>
        <h1 className={s.title}>Галерея отчётов</h1>
        <div className={s.slider}>
          <Slider>
            {gallery.map(({ id, alt }) => (
              <StaticImage
                key={id}
                src={"../../assets/images/reports/report-photo-2.jpeg"}
                alt={alt}
                height={550}
                width={860}
              />
            ))}
          </Slider>
        </div>
      </>
    </Section>
  );
};
