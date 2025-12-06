import { createGlobalStyle } from 'styled-components';
import colors from './styles/colors';
import { Home } from './templates/home';
import fonts from './styles/fonts';
import { AboutMe } from './templates/about-me';
import { Education } from './templates/education';
import { Projects } from './templates/projects';
import { Curriculum } from './templates/curriculum';

const GlobalStyles = createGlobalStyle`
  ${fonts}
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
      <Curriculum />
    </>
  );
}

export default App;
