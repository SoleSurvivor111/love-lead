import React from "react";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";

interface ILanguageDropdownProps {
  className?: string;
}

export const LanguageDropdown: React.FC<ILanguageDropdownProps> = ({
  className,
}) => {
  const { t } = useTranslation();
  const { changeLanguage, language } = useI18next();

  return (
    <select
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
      className={className}
    >
      <option value="ru">{t("Русский")}</option>
      <option value="en">{t("Английский")}</option>
    </select>
  );
};
