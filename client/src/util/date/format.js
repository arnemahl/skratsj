import { format, nbLocale, enLocale } from 'date-fns';
import { preferredLanguage } from 'util/localize';

export const {
  startYear,
  endYear,
  startMonth,
  endMonth,
} = (() => {
  // eslint-disable-next-line default-case
  switch (preferredLanguage) {
    case 'english': {
      const fmtYear = date => format(date, 'YYYY', { locale: enLocale });
      const fmtMonth = date => format(date, 'MMM YYYY', { locale: enLocale });

      return {
        startYear: fmtYear,
        endYear: date => date ? fmtYear(date) : 'present',
        startMonth: fmtMonth,
        endMonth: date => date ? fmtMonth(date) : 'present',
      };
    }
    case 'norwegian': {
      const fmtYear = date => format(date, 'YYYY', { locale: nbLocale });
      const fmtMonth = date => format(date, 'MM[.]YYYY', { locale: nbLocale });

      return {
        startYear: fmtYear,
        endYear: date => date ? fmtYear(date) : 'nå',
        startMonth: fmtMonth,
        endMonth: date => date ? fmtMonth(date) : 'nå',
      };
    }
  }
})();
