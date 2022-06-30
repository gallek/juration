const setSpanishUnits = UNITS => {
    if (UNITS) {
      UNITS.seconds.patterns = ['segundo', 's'];
      UNITS.minutes.patterns = ['minuto', 'min'];
      UNITS.hours.patterns = ['hora', 'h'];
      UNITS.days.patterns = ['día', 'd'];
      UNITS.weeks.patterns = ['semana', 'sem.'];
      UNITS.months.patterns = ['mes'];
      UNITS.years.patterns = ['año'];
  
      UNITS.seconds.formats = {
        chrono: '',
        micro: 's',
        short: 's',
        long: 'segundo',
        plural: 'segundos',
      };
      UNITS.minutes.formats = {
        chrono: ':',
        micro: 'min',
        short: 'min',
        long: 'minuto',
        plural: 'minutos',
      };
      UNITS.hours.formats = {
        chrono: ':',
        micro: 'h',
        short: 'h',
        long: 'hora',
        plural: 'horas',
      };
      UNITS.days.formats = {
        chrono: ':',
        micro: 'd',
        short: 'día',
        long: 'día',
        plural: 'días',
      };
      UNITS.weeks.formats = {
        chrono: ':',
        micro: 'sem.',
        short: 'sem.',
        long: 'semana',
        plural: 'semanas',
      };
      UNITS.months.formats = {
        chrono: ':',
        micro: 'mes',
        short: 'mes',
        long: 'mes',
        plural: 'meses',
      };
      UNITS.years.formats = {
        chrono: ':',
        micro: 'año',
        short: 'año',
        long: 'año',
        plural: 'años',
      };
    }
  };
  
  module.exports = setSpanishUnits;
  