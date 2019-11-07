
import I18n from 'react-native-i18n';

// Import all locales
import en from "../locales/en.json";
import he from '../locales/he.json';
import hi from '../locales/hi.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// Define the supported translations
I18n.translations = {
  en,
  he,
  hi
};

const currentLocale = I18n.currentLocale();
// I18n.locale = "he";
// Is it a RTL language?




// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
};

export default I18n;