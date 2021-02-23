const helloMessageElement = document.querySelector('.hello-message');
const weekDayElement = document.querySelector('.week-day');
const nowTimeElement = document.querySelector('.now-time');
const daysToNewYearElement = document.querySelector('.days-to-new-year');

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
  const newYearDate = new Date('1 january 2022').getTime();
  let timesOfDay;
  if (now.getHours() < 12) {
    timesOfDay = 'Доброе утро';
  } else if (now.getHours() > 12 && now.getHours() < 18) {
    timesOfDay = 'Добрый день';
  } else if (now.getHours() > 18) {
    timesOfDay = 'Добрый вечер';
  }
  helloMessageElement.textContent = timesOfDay;
  weekDayElement.textContent = week[weekDay];
  nowTimeElement.textContent = nowTime;
  daysToNewYearElement.textContent = Math.ceil((newYearDate - now.getTime()) / 1000 / 60 / 60 / 24);
}

setInterval(writeTime, 1000);
