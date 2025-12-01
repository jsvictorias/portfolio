import './styles.css'
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";
import { useTyping } from "./helpers";

export const Description = () => {
    const helloText = "Olá Visitante...";
    const nameText = "Júlia Victoria Santos";
    const sitesText = "Desenvolvedora de Sites";
    const freeText = "Freelancer";

    const typedHello = useTyping({ text: helloText, startDelay: 0 });
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
                <li className="icon"><a href="https://www.linkedin.com/in/julia-vic-santos/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a></li>
                <li className="icon"><a href="https://github.com/jsvictorias" target="_blank" rel="noopener noreferrer"><FiGithub /></a></li>
                <li className="icon"><a href="" target="_blank" rel="noopener noreferrer"><IoIosLink /></a></li>
            </ul>
        </div>
    )
}
