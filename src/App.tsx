import { createGlobalStyle } from 'styled-components';
import colors from './styles/colors';
import { Home } from './templates/home';
import fonts from './styles/fonts';

const GlobalStyles = createGlobalStyle`
  ${fonts}
  ${colors}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}

export default App;
