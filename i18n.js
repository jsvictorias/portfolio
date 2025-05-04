import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n;
i18n
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: localStorage.getItem("i18nextLng") || "pt-BR",
    fallbackLng: "pt-BR",
    resources: {
      en: { global: global_en },
      "pt-BR": { global: global_pt },
    },
  })
  .use(initReactI18next)
  .init({
    fallbackLng: "pt-BR",
    debug: true,
    ns: ["global"],
    defaultNS: "global",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
