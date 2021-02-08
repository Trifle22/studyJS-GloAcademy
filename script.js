'use strict';


let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let money;

let start = function() {
  do {
    money = prompt('Ваш месячный доход?', 90000);
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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 500000,
  period: 3,

  asking:  function() {

    if (confirm('Есть ли у Вас дополнительный заработок')) {
      let itemIncome;
      do {
        itemIncome = prompt('Какой у Вас дополнительный заработок?', 'Инвестиции').trim();
      } while (isNumber(itemIncome) || itemIncome.length < 5);

      let cashIncome;
      do {
        cashIncome = prompt('Сколько на этом зарабатываете?').trim();
      } while (!isNumber(cashIncome));
      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'кино,театр');
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас есть депозит в банке ?');
    for (let i = 0; i < appData.addExpenses.length; i++) {
      appData.addExpenses[i] = 
      appData.addExpenses[i][0].toUpperCase() + appData.addExpenses[i].slice(1);
    }
    console.log(appData.addExpenses.join(', '));
    let expenseName;
    let expenseCash;
    for (let i = 0; i < 2; i++) {
      do {
        expenseName = prompt('Введите обязательную статью расходов').trim();
      } while (isNumber(expenseName) || expenseName.length < 5);
      do {
        expenseCash = parseFloat(prompt('Во сколько это обойдется?').trim());
      } while (!isNumber(expenseCash));
      appData.expenses[expenseName] = expenseCash;
    }
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

  getInfoDeposit: function() {
    if (appData.deposit) {
      let percentDeposit;
      let moneyDeposit;
      do {
        percentDeposit = prompt('Какой годовой процент?', '10');
      } while (!isNumber(percentDeposit));
      do {
        moneyDeposit = prompt('Какая сумма заложена ?', '10000');
      } while (!isNumber(moneyDeposit));
    }
  },
  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();

appData.getInfoDeposit();

console.log('расходы за месяц: ' + appData.getExpensesMonth());

appData.getBudget();

appData.budgetDay = Math.floor(appData.budgetMonth/30);

console.log(appData.getTargetMonth());

console.log('Цель -  заработать ' + appData.mission + ' рублей');
console.log();
console.log('Бюджет на день равен: ' + appData.budgetDay + 'p.');

console.log(appData.getStatusIncome());


// function message() {
//   console.log(`Наша программа включает в себя данные:`);
//   for (let key in appData) {
//     console.log('Ключ: ' + key + '|значение: ' + appData[key]);
//   }
// }

// message();
