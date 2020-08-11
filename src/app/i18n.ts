import NextI18Next from 'next-i18next';
import { WithTranslation as WT } from 'next-i18next';

export const currentLocale = (process.env.NEXT_PUBLIC_LOCALE as string) || 'en';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: currentLocale,
  defaultNS: 'common',
  localePath: 'public/locales',
  otherLanguages: [currentLocale],
  fallbackLng: currentLocale,
});

export const { appWithTranslation, useTranslation, withTranslation, i18n } = NextI18NextInstance;
export type WithTranslation = WT;

export default NextI18NextInstance;
