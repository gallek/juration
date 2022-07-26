const setJapaneseUnits = UNITS => {
  if (UNITS) {
    UNITS.seconds.patterns = ['秒', 's'];
    UNITS.minutes.patterns = ['分', 'm(?!s)'];
    UNITS.hours.patterns = ['時間', 'h'];
    UNITS.days.patterns = ['日'];
    UNITS.weeks.patterns = ['週間', '週'];
    UNITS.months.patterns = ['か月', '箇月', 'カ月', 'ヵ月', 'ケ月', 'ヶ月', '月'];
    UNITS.years.patterns = ['年'];

    UNITS.seconds.formats = {
      chrono: '',
      micro: 's',
      short: '秒',
      long: '秒',
      plural: '秒',
    };
    UNITS.minutes.formats = {
      chrono: ':',
      micro: 'm',
      short: '分',
      long: '分',
      plural: '分',
    };
    UNITS.hours.formats = {
      chrono: ':',
      micro: 'h',
      short: '時間',
      long: '時間',
      plural: '時間',
    };
    UNITS.days.formats = {
      chrono: ':',
      micro: '日',
      short: '日',
      long: '日',
      plural: '日',
    };
    UNITS.weeks.formats = {
      chrono: ':',
      micro: '週',
      short: '週間',
      long: '週間',
      plural: '週間',
    };
    UNITS.months.formats = {
      chrono: ':',
      micro: 'か月',
      short: 'か月',
      long: 'か月',
      plural: 'か月',
    };
    UNITS.years.formats = {
      chrono: ':',
      micro: '年',
      short: '年',
      long: '年',
      plural: '年',
    };
  }
};

module.exports = setJapaneseUnits;
