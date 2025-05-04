import * as S from "./style";
import { useTranslation } from "react-i18next";

export const SwitchLanguage = () => {
  const { i18n } = useTranslation("global");

  const handleToggle = () => {
    const newLanguage = i18n.language === "pt-BR" ? "en" : "pt-BR";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <S.ToggleWrapper>
      <S.ToggleInput
        type="checkbox"
        checked={i18n.language === "en"}
        onChange={handleToggle}
      />
      <S.Slider>
        <S.IconWrapper>
          {i18n.language === "pt-BR" ? (
            <span style={{ paddingLeft: "1rem" }}>🇧🇷</span>
          ) : (
            <span style={{ paddingLeft: "6rem" }}>🇺🇸</span>
          )}
        </S.IconWrapper>
      </S.Slider>
    </S.ToggleWrapper>
  );
};
