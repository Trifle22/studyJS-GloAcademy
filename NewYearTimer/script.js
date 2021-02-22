function writeTime() {
  const week = {
    0: 'Воскресение',
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота'
  };

  const now = new Date();
  const weekDay = now.getUTCDay();
  const nowTime = now.toLocaleTimeString('en');
  const newYearDate = new Date('31 december 2021').getTime();
  let timesOfDay;
  if (now.getHours() < 12) {
    timesOfDay = 'утро';
  } else if (now.getHours() > 12 && now.getHours() < 18) {
    timesOfDay = 'день'
  } else if (now.getHours() > 18) {
    timesOfDay = 'вечер'
  }
  console.log(`
  Добрый ${timesOfDay}
  Сегодня: ${week[weekDay]}
  Текущее время: ${nowTime}
  До нового года осталось ${Math.floor((newYearDate - now.getTime()) / 1000 / 60 / 60 / 24)} дней`
  );
}

writeTime();
