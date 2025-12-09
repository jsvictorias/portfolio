import './style.css';
import { aboutMeMessages } from './texts';
import { useLanguage } from '../../context/LanguageContext';
import Lottie from 'lottie-react';
import butterflyAnimation from '../../animation/butterfly.json';

// importa os ícones da pasta ./constants.tsx
import {
  JavaScript,
  TypeScript,
  Python,
  Qiskit,
  ScikitLearn,
  TensorFlow,
  PyTorch,
  Jupyter,
  SQL,
  Pandas,
  NumPy,
  Matplotlib,
  CSS as CssIcon,
  StyledComponents,
  PHP,
  ReactIcon,
  NextJS,
} from './constants';

const techIcons = [
  { id: 'javascript', Component: JavaScript },
  { id: 'typescript', Component: TypeScript },
  { id: 'python', Component: Python },
  { id: 'qiskit', Component: Qiskit },
  { id: 'scikitlearn', Component: ScikitLearn },
  { id: 'tensorflow', Component: TensorFlow },
  { id: 'pytorch', Component: PyTorch },
  { id: 'jupyter', Component: Jupyter },
  { id: 'sql', Component: SQL },
  { id: 'pandas', Component: Pandas },
  { id: 'numpy', Component: NumPy },
  { id: 'matplotlib', Component: Matplotlib },
  { id: 'css', Component: CssIcon },
  { id: 'styled-components', Component: StyledComponents },
  { id: 'php', Component: PHP },
  { id: 'react', Component: ReactIcon },
  { id: 'nextjs', Component: NextJS },
];

export const AboutMe = () => {
  const { getT } = useLanguage();
  const t = getT(aboutMeMessages); 
  const about = t('about'); 
  const description = t('description');

  // duplica a lista para o efeito de loop do carrossel
  const rowOne = [...techIcons, ...techIcons];
  const rowTwo = [...techIcons].reverse().concat([...techIcons].reverse());

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
          <div className="butterfly-animation">
            <Lottie
              animationData={butterflyAnimation}
              loop={true}
              autoplay={true}
            />
          </div>
        </div>
      </div>

      <div className="about">
        <h3 className="description">{description}</h3>

        {/* CARROSSEL DE TECNOLOGIAS */}
        <div className="tech-carousel-wrapper">
          <div className="tech-row tech-row--one">
            <div className="tech-track">
              {rowOne.map(({ id, Component }, index) => (
                <div className="tech-card" key={`${id}-row1-${index}`}>
                  <Component />
                </div>
              ))}
            </div>
          </div>

          <div className="tech-row tech-row--two">
            <div className="tech-track">
              {rowTwo.map(({ id, Component }, index) => (
                <div className="tech-card" key={`${id}-row2-${index}`}>
                  <Component />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
