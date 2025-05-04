import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./style";

export const Navbar = () => {
  const { t } = useTranslation("global");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.ContainerNavbar>
      <S.HamburgerButton onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </S.HamburgerButton>
      
      <S.NavLinks isMenuOpen={isMenuOpen}>
        <S.NavLi>{t("navbar.Sobremim")}</S.NavLi>
        <S.NavLi>{t("navbar.Formação")}</S.NavLi>
        <S.NavLi>{t("navbar.Projetos")}</S.NavLi>
        <S.NavLi>{t("navbar.QuerSite")}</S.NavLi>
        <S.NavLi>{t("navbar.Curriculo")}</S.NavLi>
      </S.NavLinks>
    </S.ContainerNavbar>
  );
};