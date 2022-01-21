const setGermanUnits = UNITS => {
  if (UNITS) {
    UNITS.seconds.patterns = ['Sekunde', 'Sekunden', 'sek', 's'];
    UNITS.minutes.patterns = ['Minute', 'Minuten', 'min', 'm(?!s)'];
    UNITS.hours.patterns = ['Stunde', 'Stunden', 'h'];
    UNITS.days.patterns = ['Tag', 'Tage', 'T', 't'];
    UNITS.weeks.patterns = ['Woche', 'Wochen', 'w'];
    UNITS.months.patterns = ['Monat', 'Monate', 'M', 'Mo', 'Mnt'];
    UNITS.years.patterns = ['Jahr', 'Jahre', 'J', 'Jr'];

    UNITS.seconds.formats = {
      chrono: '',
      micro: 's',
      short: 'sek',
      long: 'Sekunde',
      plural: 'Sekunden',
    };
    UNITS.minutes.formats = {
      chrono: ':',
      micro: 'm',
      short: 'min',
      long: 'Minute',
      plural: 'Minuten',
    };
    UNITS.hours.formats = {
      chrono: ':',
      micro: 'h',
      short: 'h',
      long: 'Stunde',
      plural: 'Stunden',
    };
    UNITS.days.formats = {
      chrono: ':',
      micro: 'T',
      short: 'Tag',
      long: 'Tag',
      plural: 'Tage',
    };
    UNITS.weeks.formats = {
      chrono: ':',
      micro: 'W',
      short: 'W',
      long: 'Woche',
      plural: 'Wochen',
    };
    UNITS.months.formats = {
      chrono: ':',
      micro: 'M',
      short: 'M',
      long: 'Monat',
      plural: 'Monate',
    };
    UNITS.years.formats = {
      chrono: ':',
      micro: 'J',
      short: 'J',
      long: 'Jahr',
      plural: 'Jahre',
    };
  }
};

module.exports = setGermanUnits;
