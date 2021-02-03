'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money, income, addExpenses, deposit, mission, period, budgetDay,
    expenses1, expenses2, amount1, amount2, accumulatedMonth;


income = 'инвестиции';
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас есть депозит в банке ?');
mission = 500000;


let start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  }
  while (!isNumber(money) || money < 0);
};

start();

// expenses1 = prompt('Введите обязательную статью расходов');
// amount1 = +prompt('Во сколько это обойдется?');
// expenses2 = prompt('Введите обязательную статью расходов');
// amount2 = +prompt('Во сколько это обойдется?');
let expenses = [];


function getExpensesMonth() { 
  let sum = 0;
  let cash;
  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов');
    cash = prompt('Во сколько это обойдется?');
    while (!isNumber(cash) || cash < 0) {
      cash = prompt('Во сколько это обойдется?');
    }
    sum += Number(cash);
  }
  console.log(expenses);
  return sum;
}

let expensesAmount = getExpensesMonth();

console.log('расходы за месяц: ' + expensesAmount);



function getAccumulatedMonth() {
  return money - expensesAmount;
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

