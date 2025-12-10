import './style.css';
import { aboutMeMessages } from './texts';
import { useLanguage } from '../../context/LanguageContext';
import Lottie from 'lottie-react';
import butterflyAnimation from '../../animation/butterfly.json';

export const AboutMe = () => {
  const { getT } = useLanguage();
  const t = getT(aboutMeMessages);
  const about = t('about');
  const description1 = t('description1');
  const description2 = t('description2');

  return (
    <section id="aboutMe" className="container-about-me">
      <div className="title-wrapper">
        <div className="title">
          <div className="title-content">
            <h1 className="title-text">
              {about}
              <span className="dots">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </span>
            </h1>
            <span className="underline" />
          </div>
          {/* Adicione sua animação Lottie aqui */}
          <div className="butterfly-animation">
            <Lottie animationData={butterflyAnimation} loop autoplay />
          </div>
        </div>
      </div>
      <div className="about">
        <h3 
          className="description"
          dangerouslySetInnerHTML={{ __html: description1 }} 
        />
        <h3 
          className="description"
          dangerouslySetInnerHTML={{ __html: description2 }} 
        />
      </div>
    </section>
  );
}
