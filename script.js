'use strict';

let money, income, addExpenses, deposit, mission, period, budgetDay, budgetMonth, purpose,
    expenses1, expenses2, amount1, amount2;


money = +prompt('Ваш месячный доход?');
income = 'инвестиции';
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас есть депозит в банке ?');
mission = 500000;
period = 6;
expenses1 = prompt('Введите обязательную статью расходов');
amount1 = +prompt('Во сколько это обойдется?');
expenses2 = prompt('Введите обязательную статью расходов');
amount2 = +prompt('Во сколько это обойдется?');

budgetMonth = money - (amount1 + amount2);
budgetDay = Math.floor(budgetMonth/30);
purpose = Math.ceil(mission/budgetMonth);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель -  заработать ' + mission + ' рублей');
console.log(addExpenses);
console.log(addExpenses.toLowerCase().split(','));
console.log('Месячный бюджет равен ' + budgetMonth + 'р.');
console.log('Цель будет достигнута за ' + purpose + ' месяцев(-a)');
console.log('Бюджет на день равен: ' + budgetDay + 'p.');

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
  console.log('К сожалению, у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
  console.log('Что-то пошло не так');
}