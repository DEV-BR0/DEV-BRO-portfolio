import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/transliation.json";
import ru from "./locales/ru/transliation.json";
import uz from "./locales/uz/transliation.json";
const resources = {
  en: {
    transslation: en,
  },
  uz: {
    transslation: uz,
  },
  ru: {
    transslation: ru,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  initerpolation: {
    escapeValue: false,
  },
});
