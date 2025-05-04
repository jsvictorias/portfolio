import { Navbar } from "../../components/NavBar/Navbar";
import { DarkModeToggle } from "../../utils/DarkModeToggle/DarkModeToggle";
import { SwitchLanguage } from "../../utils/Language/SwitchLanguage";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { MdOutlineContentPaste } from "react-icons/md";
import * as S from "./style";
import { useTranslation } from "react-i18next";
import FlowersComponent from "../../components/layouts/flowerComponent/FlowersComponent";

export const Home = () => {
  const { t } = useTranslation("global");
  return (
    <div>
      <Navbar />
      <div
        style={{
          marginTop: "3rem",
          marginLeft: "3rem",
          flexDirection: "column",
        }}
      >
        <DarkModeToggle />
      </div>
      <div
        style={{
          marginTop: "3rem",
          marginLeft: "3rem",
          flexDirection: "column",
        }}
      >
        <SwitchLanguage />
      </div>
      <S.ContainerGrid>
        <S.ContainerTitle>
          <h2>{t("home.ola")}</h2>
          <h1>Julia Victoria Santos</h1>
          <h3>{t("home.dev")}</h3>
          <h5>Freelancer</h5>

          <S.RedesSociais>
            <S.LinhaComIcones>
              <a
                href="https://www.linkedin.com/in/julia-vic-santos/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://github.com/jsvictorias"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a href="/curriculo.pdf" download>
                <MdOutlineContentPaste />
              </a>
            </S.LinhaComIcones>
          </S.RedesSociais>
        </S.ContainerTitle>
        <S.ContainerAnimacao>
          <FlowersComponent />
        </S.ContainerAnimacao>
      </S.ContainerGrid>
    </div>
  );
};
