(function(){
  var juration;
  if (typeof require !== 'undefined')
    juration = require('juration');
  else
    juration = window.juration;
  
  if (juration && juration.UNITS){
    juration.UNITS.seconds.patterns = ['Sekunde', 'Sekunden', 'sek', 's'];
    juration.UNITS.minutes.patterns = ['Minute', 'Minuten', 'min', 'm(?!s)'];
    juration.UNITS.hours.patterns = ['Stunde', 'Stunden', 'h'];
    juration.UNITS.days.patterns = ['Tag', 'Tage', 'T', 't'];
    juration.UNITS.weeks.patterns = ['Woche', 'Wochen', 'w'];
    juration.UNITS.months.patterns = ['Monat', 'Monate', 'M', 'Mo', 'Mnt'];
    juration.UNITS.years.patterns = ['Jahr', 'Jahre', 'J', 'Jr'];
    
    juration.UNITS.seconds.formats = {
      'chrono': '',
      'micro':  's',
      'short':  'sek',
      'long':   'Sekunde',
      'plural': 'Sekunden'
    };
    juration.UNITS.minutes.formats = {
      'chrono': ':',
      'micro':  'm',
      'short':  'min',
      'long':   'Minute',
      'plural': 'Minuten'
    };
    juration.UNITS.hours.formats = {
      'chrono': ':',
      'micro':  'h',
      'short':  'h',
      'long':   'Stunde',
      'plural': 'Stunden'
    };
    juration.UNITS.days.formats = {
      'chrono': ':',
      'micro':  'T',
      'short':  'Tag',
      'long':   'Tag',
      'plural': 'Tage'
    };
    juration.UNITS.weeks.formats = {
      'chrono': ':',
      'micro':  'W',
      'short':  'W',
      'long':   'Woche',
      'plural': 'Wochen'
    };
    juration.UNITS.months.formats = {
      'chrono': ':',
      'micro':  'M',
      'short':  'M',
      'long':   'Monat',
      'plural': 'Monate'
    };
    juration.UNITS.years.formats = {
      'chrono': ':',
      'micro':  'J',
      'short':  'J',
      'long':   'Jahr',
      'plural': 'Jahre'
    };
  }
})();

