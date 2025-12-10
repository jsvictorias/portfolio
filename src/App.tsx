import { createGlobalStyle } from 'styled-components';
import colors from './styles/colors';
import { Home } from './templates/home';
import { AboutMe } from './templates/about-me';
import { Education } from './templates/education';
import { Projects } from './templates/projects';
import { Curriculum } from './templates/curriculum';
import { ScrollAnimation } from './templates/scroll-animation';

const GlobalStyles = createGlobalStyle`
  ${colors}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
      <AboutMe />
      <Education />
      <Projects />
      <ScrollAnimation />
      <Curriculum />
    </>
  );
}

export default App;
