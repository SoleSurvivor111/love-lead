import {  } from "gatsby-plugin-react-i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { showTranslations } from "translation-check";
export const ShowTranslationBtn = () => {
  const { t } = useTranslation();

  const showTranslation = () => {
    showTranslations(I18nextContext.i18n.language);
  };
  return (
    <button onClick={showTranslation} type="button">
      {t("Показать перевод")}
    </button>
  );
};
