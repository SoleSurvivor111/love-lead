import React from "react";
import { Section } from "@components/section";
import { Slider } from "@components/slider";
import { StaticImage } from "gatsby-plugin-image";

import * as s from "./styles.module.sass";
import { useTranslation } from "react-i18next";

export const ReportGallery = () => {
  const { t } = useTranslation();
  return (
    <Section rootClassName={s.root} contentClassName={s.content}>
      <>
        <h1 className={s.title}>{t("Галерея отчётов")}</h1>
        <div className={s.slider}>
          <Slider>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/2.jpg"}
                alt={t(
                  "Клубная игра от Пикап тренера Августе в Челябинске пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/3.jpg"}
                alt={t(
                  "знакомство с сетом от тренера Руслана пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/4.jpg"}
                alt={t(
                  "знакомство с сетом от Руслана пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/5.jpg"}
                alt={t(
                  "знакомство в баре Тренера Руслана и его напарника пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/6.jpg"}
                alt={t(
                  "поцелуй с лтр от тренера Руслана пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/7.jpg"}
                alt={t("поцелуй с девушкой")}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/8.jpg"}
                alt={t("тренер август с девушкой пикап проекта «Love Lead»")}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/9.jpg"}
                alt={t("клубная игра пикап проекта «Love Lead»")}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/10.jpeg"}
                alt={t("клубная игра пикап проекта «Love Lead»")}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/11.jpg"}
                alt={t(
                  "тренер Руслан на квартире с девушкой пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/12.jpg"}
                alt={t(
                  "подход к девушке одному из участников в Санкт-Петербурге пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/13.jpeg"}
                alt={t(
                  "фото ученика с девушкой на набережной пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/14.jpeg"}
                alt={t(
                  "фото ученика с девушками в Москве пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/15.jpeg"}
                alt={t(
                  "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/16.jpeg"}
                alt={t(
                  "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/17.jpeg"}
                alt={t(
                  "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/18.jpeg"}
                alt={t(
                  "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/19.jpeg"}
                alt={t(
                  "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/20.jpeg"}
                alt={t(
                  "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/21.jpeg"}
                alt={t(
                  "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/22.jpeg"}
                alt={t(
                  "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/23.jpeg"}
                alt={t(
                  "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/24.jpeg"}
                alt={t(
                  "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/25.jpeg"}
                alt={t(
                  "подход ученика к девушке в Санкт-Петербурге пикап проекта «Love Lead»"
                )}
                height={550}
                width={860}
              />
            </div>
            <div className={s.slide}>
              <StaticImage
                src={"../../assets/images/reports/26.jpg"}
                alt={t("завод ученика девушки домой пикап проекта «Love Lead»")}
                height={550}
                width={860}
              />
            </div>
          </Slider>
        </div>
      </>
    </Section>
  );
};
