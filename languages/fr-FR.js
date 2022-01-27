const setFrenchUnits = UNITS => {
  if (UNITS) {
    UNITS.seconds.patterns = ['seconde', 'sec', 's'];
    UNITS.minutes.patterns = ['minute', 'min', 'm'];
    UNITS.hours.patterns = ['heure', 'h'];
    UNITS.days.patterns = ['jour', 'j'];
    UNITS.weeks.patterns = ['semaine', 'sem', 'se'];
    UNITS.months.patterns = ['mois'];
    UNITS.years.patterns = ['année', 'an'];

    UNITS.seconds.formats = {
      chrono: '',
      micro: 's',
      short: 'sec',
      long: 'seconde',
      plural: 'secondes',
    };
    UNITS.minutes.formats = {
      chrono: ':',
      micro: 'm',
      short: 'min',
      long: 'minute',
      plural: 'minutes',
    };
    UNITS.hours.formats = {
      chrono: ':',
      micro: 'h',
      short: 'h',
      long: 'heure',
      plural: 'heures',
    };
    UNITS.days.formats = {
      chrono: ':',
      micro: 'j',
      short: 'j',
      long: 'jour',
      plural: 'jours',
    };
    UNITS.weeks.formats = {
      chrono: ':',
      micro: 'se',
      short: 'sem',
      long: 'semaine',
      plural: 'semaines',
    };
    UNITS.months.formats = {
      chrono: ':',
      micro: 'mois',
      short: 'mois',
      long: 'mois',
      plural: 'mois',
    };
    UNITS.years.formats = {
      chrono: ':',
      micro: 'an',
      short: 'an',
      long: 'année',
      plural: 'années',
    };
  }
};

module.exports = setFrenchUnits;
