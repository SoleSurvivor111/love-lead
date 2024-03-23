import React from "react";
import { Section } from "@components/section";
import { Slider } from "@components/slider";
import { StaticImage } from "gatsby-plugin-image";
import { reports } from "./data";

import * as s from "./styles.module.sass";

export const ReportGallery = () => {
  return (
    <Section rootClassName={s.root} contentClassName={s.content}>
      <>
        <h1 className={s.title}>Галерея отчётов</h1>
        <div className={s.slider}>
          <Slider>
            <StaticImage
              src={"../../assets/images/reports/1.jpeg"}
              alt={
                "встреча участников пикап марафона 2023 лето в Санкт-Петербурга пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/2.jpg"}
              alt={
                "Клубная игра от Пикап тренера Августе в Челябинске пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/3.jpg"}
              alt={
                "знакомство с сетом от тренера Руслана пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/4.jpg"}
              alt={"знакомство с сетом от Руслана пикап проекта «Love Lead»"}
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/5.jpg"}
              alt={
                "знакомство в баре Тренера Руслана и его напарника пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/6.jpg"}
              alt={"поцелуй с лтр от тренера Руслана пикап проекта «Love Lead»"}
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/7.jpg"}
              alt={"поцелуй с девушкой"}
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/8.jpg"}
              alt={"тренер август с девушкой пикап проекта «Love Lead»"}
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/9.jpg"}
              alt={"клубная игра пикап проекта «Love Lead»"}
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/10.jpeg"}
              alt={"клубная игра пикап проекта «Love Lead»"}
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/11.jpg"}
              alt={
                "тренер Руслан на квартире с девушкой пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/12.jpg"}
              alt={
                "подход к девушке одному из участников в Санкт-Петербурге пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/13.jpeg"}
              alt={
                "фото ученика с девушкой на набережной пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/14.jpeg"}
              alt={
                "фото ученика с девушками в Москве пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/15.jpeg"}
              alt={
                "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/16.jpeg"}
              alt={
                "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/17.jpeg"}
              alt={
                "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/18.jpeg"}
              alt={
                "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/19.jpeg"}
              alt={
                "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/20.jpeg"}
              alt={
                "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/21.jpeg"}
              alt={
                "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/22.jpeg"}
              alt={
                "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/23.jpeg"}
              alt={
                "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/24.jpeg"}
              alt={
                "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/25.jpeg"}
              alt={
                "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
              }
              height={550}
              width={860}
            />
            <StaticImage
              src={"../../assets/images/reports/26.jpg"}
              alt={"завод ученика девушки домой пикап проекта «Love Lead»"}
              height={550}
              width={860}
            />
          </Slider>
        </div>
      </>
    </Section>
  );
};
