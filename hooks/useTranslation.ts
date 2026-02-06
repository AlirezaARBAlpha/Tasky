import { useAppSelector } from "./hooks";
import { translations } from "@/locales/dictionary";

export const useTranslation = () => {
  const lang = useAppSelector((state) => state.auth.lang);
  const t = translations[lang] || translations.fa;

  return { t, lang };
};