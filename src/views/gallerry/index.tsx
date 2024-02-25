import React from "react";
import { Section } from "@components/section";
import { Slider } from "@components/slider";
import { StaticImage } from "gatsby-plugin-image";

export const Gallery = () => {
  return (
    <Section>
      <>
        <h1>Галерея отчётов</h1>
        <Slider>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((id) => (
            <StaticImage
              key={id}
              src={`../../assets/images/gallery/${id}.png`}
              alt={`отчёт ${id}`}
            />
          ))}
        </Slider>
      </>
    </Section>
  );
};
