(function () {
  var juration;
  if (typeof require !== 'undefined') {
    juration = require('juration');
  } else {
    juration = window.juration;
  }

  if (juration && juration.UNITS) {
    juration.UNITS.seconds.patterns = ['seconde', 'sec', 's'];
    juration.UNITS.minutes.patterns = ['minute', 'min', 'm'];
    juration.UNITS.hours.patterns = ['heure', 'h'];
    juration.UNITS.days.patterns = ['jour', 'j'];
    juration.UNITS.weeks.patterns = ['semaine', 'sem', 'se'];
    juration.UNITS.months.patterns = ['mois'];
    juration.UNITS.years.patterns = ['année', 'an'];

    juration.UNITS.seconds.formats = {
      chrono: '',
      micro: 's',
      short: 'sec',
      long: 'seconde',
      plural: 'secondes',
    };
    juration.UNITS.minutes.formats = {
      chrono: ':',
      micro: 'm',
      short: 'min',
      long: 'minute',
      plural: 'minutes',
    };
    juration.UNITS.hours.formats = {
      chrono: ':',
      micro: 'h',
      short: 'h',
      long: 'heure',
      plural: 'heures',
    };
    juration.UNITS.days.formats = {
      chrono: ':',
      micro: 'j',
      short: 'j',
      long: 'jour',
      plural: 'jours',
    };
    juration.UNITS.weeks.formats = {
      chrono: ':',
      micro: 'se',
      short: 'sem',
      long: 'semaine',
      plural: 'semaines',
    };
    juration.UNITS.months.formats = {
      chrono: ':',
      micro: 'mois',
      short: 'mois',
      long: 'mois',
      plural: 'mois',
    };
    juration.UNITS.years.formats = {
      chrono: ':',
      micro: 'an',
      short: 'an',
      long: 'année',
      plural: 'années',
    };
  }
})();
