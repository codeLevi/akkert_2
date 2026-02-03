import en from "./en.json";
import hu from "./hu.json";
import ro from "./ro.json";

export const supportedLangs = ["ro", "hu", "en"] as const;
export type Lang = (typeof supportedLangs)[number];

export type Messages = typeof ro;

const messagesByLang: Record<Lang, Messages> = {
  ro,
  hu,
  en,
};

export function getMessages(lang: string): Messages {
  if ((supportedLangs as readonly string[]).includes(lang)) {
    return messagesByLang[lang as Lang];
  }
  return ro;
}
