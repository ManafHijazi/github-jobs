import i18next from 'i18next';
import { GlobalRerender } from './Middleware.Helper';
import RecentOpeningsEn from '../views/RecentOpeningsView/I18n/en.json';
import RecentOpeningsAr from '../views/RecentOpeningsView/I18n/ar.json';
import JobDetailsEn from '../views/JobDetailsView/I18n/en.json';
import JobDetailsAr from '../views/JobDetailsView/I18n/ar.json';

export const localizationInit = () => {
  i18next.init({
    react: {
      useSuspense: false,
    },
    interpolation: { escapeValue: false },
    fallbackLng: ['en', 'ar'],
    lng: 'en', // language to use
    resources: {
      en: {
        RecentOpeningsView: RecentOpeningsEn,
        JobDetailsView: JobDetailsEn,
      },
      ar: {
        RecentOpeningsView: RecentOpeningsAr,
        JobDetailsView: JobDetailsAr,
      },
    },
  });

  if (localStorage.getItem('localization')) {
    i18next.changeLanguage(JSON.parse(localStorage.getItem('localization')).currentLanguage);
    const isRtl = JSON.parse(localStorage.getItem('localization')).currentLanguage === 'ar';
    if (isRtl) {
      const direction =
        JSON.parse(localStorage.getItem('localization')).currentLanguage === 'ar' ? 'rtl' : '';
      document.body.setAttribute('class', direction);
      document.body.setAttribute('dir', direction);
      document.documentElement.lang = JSON.parse(
        localStorage.getItem('localization')
      ).currentLanguage;
    }
  } else {
    localStorage.setItem('localization', JSON.stringify({ currentLanguage: 'en', isRtl: false }));
    i18next.changeLanguage('en');
  }
};

export const languageChange = (currentLanguage) => {
  const isRtl = currentLanguage === 'ar';
  const direction = currentLanguage === 'ar' ? 'rtl' : '';
  localStorage.setItem('localization', JSON.stringify({ currentLanguage, isRtl }));
  document.body.setAttribute('class', direction);
  document.body.setAttribute('dir', direction);
  document.documentElement.lang = currentLanguage;
  i18next.changeLanguage(currentLanguage);
  GlobalRerender();
};
localizationInit();
