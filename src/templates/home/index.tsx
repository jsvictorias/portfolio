import { NavBar } from "../../components/atoms/navbar";
import { Description } from "../../components/atoms/description";
import './styles.css';
import LanguageSwitch from "../../components/atoms/LanguageSwitch";

export const Home = () => {
  return (
    <>
      <NavBar />

      <div className="container-home">
        <div className="switchs">
            <div className="language">
              <LanguageSwitch />
            </div>
        </div>
        <div className="grid">
          
          <div><Description /></div>
          <div className="iframe-container">
            <iframe src="/external/index.html" title="external" />
          </div>
        </div>
      </div>
    </>
  );
};
