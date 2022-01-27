const setEnglishUnits = UNITS => {
  if (UNITS) {
    UNITS.seconds.patterns = ['second', 'sec', 's'];
    UNITS.minutes.patterns = ['minute', 'min', 'm(?!s)'];
    UNITS.hours.patterns = ['hour', 'hr', 'h'];
    UNITS.days.patterns = ['day', 'dy', 'd'];
    UNITS.weeks.patterns = ['week', 'wk', 'w'];
    UNITS.months.patterns = ['month', 'mon', 'mo', 'mth'];
    UNITS.years.patterns = ['year', 'yr', 'y'];

    UNITS.seconds.formats = {
      chrono: '',
      micro: 's',
      short: 'sec',
      long: 'second',
      plural: 'seconds',
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
      short: 'hr',
      long: 'hour',
      plural: 'hours',
    };
    UNITS.days.formats = {
      chrono: ':',
      micro: 'd',
      short: 'day',
      long: 'day',
      plural: 'days',
    };
    UNITS.weeks.formats = {
      chrono: ':',
      micro: 'w',
      short: 'wk',
      long: 'week',
      plural: 'weeks',
    };
    UNITS.months.formats = {
      chrono: ':',
      micro: 'm',
      short: 'mth',
      long: 'month',
      plural: 'months',
    };
    UNITS.years.formats = {
      chrono: ':',
      micro: 'y',
      short: 'yr',
      long: 'year',
      plural: 'years',
    };
  }
};

module.exports = setEnglishUnits;
