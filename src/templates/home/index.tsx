import { NavBar } from "../../components/atoms/navbar";
import { Description } from "../../components/atoms/description";
import './styles.css';
import ThemeSwitch from "../../components/atoms/ThemeSwitch";

export const Home = () => {
  return (
    <>
      <NavBar />

      <div className="container-home">
        <div className="switchs">
            <ThemeSwitch />
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
