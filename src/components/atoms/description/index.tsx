import './styles.css';
import { useTyping } from "./helpers";
import { descriptionMessages } from './texts';
import { useLanguage } from '../../../context/LanguageContext';
import { Linkedn, Github, Curriculum } from './constants';

export const Description = () => {
  const { getT, currentLanguage } = useLanguage();
  const t = getT(descriptionMessages); 
  const helloText = t('helloText'); 
  const nameText = t('nameText');   
  const sitesText = t('sitesText'); 
  const freeText = t('freeText');

  const cv_pt = 'https://drive.google.com/file/d/1-iAfQCB4p0JZH71RNm4vq0rcuvd61Cmx/view?usp=sharing';
  const cv_en = 'https://drive.google.com/file/d/1Jp4HuBFizpEh6wH_uqFKrwWxP2SCq3Hl/view?usp=drivesdk';

  const resumeLink = currentLanguage === 'pt' ? cv_pt : cv_en;

  const typedHello = useTyping({ text: helloText, startDelay: 800 });
  const typedName  = useTyping({ text: nameText, startDelay: 500 });
  const typedSites = useTyping({ text: sitesText, startDelay: 1000 });
  const typedFree  = useTyping({ text: freeText, startDelay: 1500 });

  return(
    <div className='container-description'>
      <h2 className='hello typing'>{typedHello}</h2>
      <h1 className='name typing'>{typedName}</h1>
      <h3 className='sites typing'>{typedSites}</h3>
      <h4 className='free typing'>{typedFree}</h4>

      <ul className="container-icons">
        <li className="icon">
          <a
            href="https://www.linkedin.com/in/julia-vic-santos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedn />
          </a>
        </li>

        <li className="icon">
          <a
            href="https://github.com/jsvictorias"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </li>

        <li className="icon">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Curriculum />
          </a>
        </li>
      </ul>
    </div>
  );
};
