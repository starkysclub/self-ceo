import NextI18Next from 'next-i18next';

const currentLocale = process.env.NEXT_PUBLIC_LOCALE as string || "en";

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: currentLocale,
  defaultNS: 'common',
  localePath: 'public/locales',
  otherLanguages: [currentLocale],
  fallbackLng: currentLocale
});

export const { appWithTranslation, useTranslation, withTranslation, i18n } = NextI18NextInstance;

export default NextI18NextInstance;