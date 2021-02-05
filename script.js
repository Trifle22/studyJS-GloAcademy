'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;

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
    for (let i = 0; i < 2; i++) {
      appData.expenses[prompt('Введите обязательную статью расходов')] = parseInt(prompt('Во сколько это обойдется?'));
    }
    console.log(appData.expenses);
  },

  getExpensesMonth: function () { 

    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
    return appData.expensesMonth;
  },

  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth: function () {
    if (appData.budgetMonth > 0) {
      return `Цель будет достигнута примерно через ${Math.ceil(appData.mission / appData.budgetMonth)} месяцев(-a)`;
    } else {
      return 'Ваш доход равен нулю, цель недостижима';
    }
  },

  getStatusIncome: function () {
    if (appData.budgetDay >= 1200) {
      return 'У вас высокий уровень дохода';
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) { 
      return 'У вас средний уровень дохода';
    } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
      return 'К сожалению, у вас уровень дохода ниже среднего';
    } else if (appData.budgetDay < 0) {
      return 'Что-то пошло не так';
    }
  },
};

appData.asking();

console.log('расходы за месяц: ' + appData.getExpensesMonth());

appData.getBudget();

appData.budgetDay = Math.floor(appData.budgetMonth/30);

console.log(appData.getTargetMonth());

console.log('Цель -  заработать ' + appData.mission + ' рублей');
console.log();
console.log('Бюджет на день равен: ' + appData.budgetDay + 'p.');

console.log(appData.getStatusIncome());

console.log('');
console.log('');
console.log('');

function message() {
  console.log(`Наша программа включает в себя данные:`);
  for (let key in appData) {
    console.log('Ключ: ' + key + '|значение: ' + appData[key]);
  }
}

message();

