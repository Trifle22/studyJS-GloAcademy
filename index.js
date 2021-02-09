'use strict';

let buttonStart = document.getElementById('start');
let buttonIncomeAdd = document.getElementsByTagName('button')[0];
let buttonExpensesAdd = document.getElementsByTagName('button')[1];
let depositCheck = document.querySelector('#deposit-check');
let additionalIncomeInputs = document.querySelectorAll('.additional_income-item');
let budgetMonthValue = document.getElementsByClassName('budget_month-value');
let budgetDayValue = document.getElementsByClassName('budget_day-value');
let expensesMonthValue = document.getElementsByClassName('expenses_month-value');
let additionalIncomeValue = document.getElementsByClassName('additional_income-value');
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value');
let incomePeriodValue = document.getElementsByClassName('income_period-value');
let targetMonthValue = document.getElementsByClassName('target_month-value');
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitleElement = document.querySelector('.income-title');
let incomeAmountElement = document.querySelector('.income-amount');
let expensesTitleElement = document.querySelector('.expenses-title');
let expensesAmountElement = document.querySelector('.expenses-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmountElement = document.querySelector('.target-amount');
let periodSelectElement = document.querySelector('.period-select');

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
      appData.addExpenses[i] = appData.addExpenses[i].trim();
      appData.addExpenses[i] = 
      appData.addExpenses[i][0].toUpperCase() + appData.addExpenses[i].slice(1);
    }
    console.log(appData.addExpenses.join(', '));
    let expenseName;
    let expenseCash;
    for (let i = 0; i < 2; i++) {
      do {
        expenseName = prompt('Введите обязательную статью расходов');
      } while (
        expenseName === null || 
        isNumber(expenseName) || 
        expenseName.length < 5 ||
        !expenseName.trim());
      do {
        expenseCash = parseFloat(prompt('Во сколько это обойдется?'));
      } while (
        expenseCash === null ||
        !isNumber(expenseCash) ||
        !expenseName.toString().trim()
        );
        expenseName.trim();
        expenseCash = parseFloat(expenseCash.toString().trim());
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

