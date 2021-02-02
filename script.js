'use strict';

let money, income, addExpenses, deposit, mission, period, budgetDay,
    expenses1, expenses2, amount1, amount2, accumulatedMonth;


money = +prompt('Ваш месячный доход?');
income = 'инвестиции';
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас есть депозит в банке ?');
mission = 500000;
expenses1 = prompt('Введите обязательную статью расходов');
amount1 = +prompt('Во сколько это обойдется?');
expenses2 = prompt('Введите обязательную статью расходов');
amount2 = +prompt('Во сколько это обойдется?');

function getExpensesMonth(amount1, amount2) { 
  return amount1 + amount2;
}
console.log('расходы за месяц: ' + getExpensesMonth(amount1, amount2));

function getAccumulatedMonth() {
  return money - getExpensesMonth(amount1, amount2);
}
accumulatedMonth = getAccumulatedMonth();
budgetDay = Math.floor(accumulatedMonth/30);

function showTypeOf(arg) {
  return typeof arg;
}
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));

function getTargetMonth() {
  if (accumulatedMonth > 0) {
    return `Цель будет достигнута примерно через ${Math.ceil(mission / accumulatedMonth)} месяцев`;
  } else {
    return 'Ваш доход равен нулю, цель недостижима';
  }
}

console.log(getTargetMonth());


console.log('Цель -  заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(','));
console.log('Бюджет на день равен: ' + budgetDay + 'p.');


function getStatusIncome() {
  if (budgetDay >= 1200) {
    return 'У вас высокий уровень дохода';
  } else if (budgetDay >= 600 && budgetDay < 1200) { 
    return 'У вас средний уровень дохода';
  } else if (budgetDay < 600 && budgetDay >= 0) {
    return 'К сожалению, у вас уровень дохода ниже среднего';
  } else if (budgetDay < 0) {
    return 'Что-то пошло не так';
  }
}

console.log(getStatusIncome());

