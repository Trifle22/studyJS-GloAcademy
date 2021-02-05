'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money, income, addExpenses, deposit, mission, budgetDay,
    expenses1, expenses2, amount1, amount2, accumulatedMonth;

let start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  }
  while (!isNumber(money) || money < 0 || money === '' || money === null);
};
    
start();


let appData = {
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 500000,
  period: 3,
  asking:  function() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас есть депозит в банке ?');
  },
};



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
  return sum;
}

let expensesAmount = getExpensesMonth();

console.log('расходы за месяц: ' + expensesAmount);



function getAccumulatedMonth() {
  return money - expensesAmount;
}

accumulatedMonth = getAccumulatedMonth();

budgetDay = Math.floor(accumulatedMonth/30);

function getTargetMonth() {
  if (accumulatedMonth > 0) {
    return `Цель будет достигнута примерно через ${Math.ceil(appData.mission / accumulatedMonth)} месяцев(-a)`;
  } else {
    return 'Ваш доход равен нулю, цель недостижима';
  }
}

console.log(getTargetMonth());


console.log('Цель -  заработать ' + appData.mission + ' рублей');
console.log();
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

