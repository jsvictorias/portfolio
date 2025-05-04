import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Home />
    </I18nextProvider>
  );
}
export default App;
