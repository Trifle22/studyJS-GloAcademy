'use strict';

let buttonStart = document.getElementById('start');
let buttonCancel = document.getElementById('cancel');
let buttonIncomeAdd = document.getElementsByTagName('button')[0];
let buttonExpensesAdd = document.getElementsByTagName('button')[1];
let depositCheck = document.querySelector('#deposit-check');
let additionalIncomeInputs = document.querySelectorAll('.additional_income-item');
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitleElement = document.querySelector('.income-title');
let expensesTitleElement = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmountElement = document.querySelector('.target-amount');
let periodSelectElement = document.querySelector('.period-select');
let periodAmount = document.querySelector('.period-amount');
let incomeItem = document.querySelectorAll('.income-items');
let textInputs = document.querySelectorAll('input[placeholder="Наименование"]');
let numInputs = document.querySelectorAll('input[placeholder="Сумма"]');
let regex = /^[?!,.а-яА-ЯёЁ]/;

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const AppData = function() {
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.period = 3;
};

AppData.prototype.check = function() {
  if (salaryAmount.value.trim() !== '') {
    buttonStart.removeAttribute('disabled');
  }
};

AppData.prototype.start = function() {
  let allInputs = document.querySelectorAll("input[type='text']");
  allInputs.forEach(function (item) {
    item.disabled = true;
  });
        this.budget = parseFloat(salaryAmount.value);
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();
};

AppData.prototype.cancel = function () {
  buttonCancel.style.display = 'none';
  buttonStart.style.display = 'block';
  let allInputs = document.querySelectorAll("input[type='text']");
  allInputs.forEach(function (item) {
    item.value = '';
    item.disabled = false;
    item.style.border = '';
    if (item.classList.contains('result-total')) {
      item.disabled = true;
    }
  });
  incomePeriodValue.value = 0;
  periodSelectElement.value = 1;
  periodAmount.textContent = '1';
  this.budget =  0;
  this.budgetDay =  0;
  this.budgetMonth =  0;
  this.expensesMonth =  0;
  this.income =  {};
  this.incomeMonth =  0;
  this.addIncome =  [];
  this.expenses =  {};
  this.addExpenses =  [];
  this.deposit = false;
  this.percentDeposi =  0;
  this.moneyDeposit = 0;
  this.period =  3;
  depositCheck.checked = false;

  function removeInputs() {
    let expensesInputs = document.querySelectorAll('.expenses-items');
    if (expensesInputs.length > 1) {
      expensesInputs.forEach(function(item, i) {
        if (i > 0) {
          item.style.display = 'none';
        }
      });
    }
    buttonExpensesAdd.style.display = 'block';
    let incomeInputs = document.querySelectorAll('.income-items');
    if (incomeInputs.length > 1) {
      incomeInputs.forEach(function(item,i) {
        if (i > 0) {
          item.style.display = 'none';
        }
      });
    }
    buttonIncomeAdd.style.display = 'block';
  }
  removeInputs();
};


AppData.prototype.showResult = function() {
  const _this = this;
  periodSelectElement.addEventListener('input', function() {
    incomePeriodValue.value = _this.budgetMonth * parseInt(periodSelectElement.value);
  });

  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = Math.ceil(this.getTargetMonth());
  incomePeriodValue.value = this.calcSavedMoney();
};

AppData.prototype.addExpensesBlock = function() {
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  const newExpensesTextInput = cloneExpensesItem.querySelector('.expenses-title');
  const newExpensesNumInput = cloneExpensesItem.querySelector('.expenses-amount');
  newExpensesTextInput.value = '';
  newExpensesNumInput.value = '';
  newExpensesTextInput.style.border = '';
  newExpensesNumInput.style.border = '';
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonExpensesAdd);
  expensesItems = document.querySelectorAll('.expenses-items');
  if (expensesItems.length === 3) {
    buttonExpensesAdd.style.display = 'none';
  }
  newExpensesTextInput.addEventListener('change', function() {
    if (isNumber(newExpensesTextInput.value.trim()) || !newExpensesTextInput.value.trim().match(regex)) {
      newExpensesTextInput.style.border = '2px solid red';
      alert('Введите корректные данные');
    } else {
      newExpensesTextInput.style.border = '2px solid green';
    }
  });
  newExpensesNumInput.addEventListener('change', function() {
    if (!isNumber(newExpensesNumInput.value.trim())) {
      newExpensesNumInput.style.border = '2px solid red';
      alert('Введите корректные данные');
    } else {
      newExpensesNumInput.style.border = '2px solid green';
    }
  });
};

AppData.prototype.addIncomeBlock = function() {
  let cloneIcomeItem = incomeItem[0].cloneNode(true);
  const newIncomeTextInput = cloneIcomeItem.querySelector('.income-title');
  const newIncomeNumInput = cloneIcomeItem.querySelector('.income-amount');
  newIncomeTextInput.value = '';
  newIncomeNumInput.value = '';
  newIncomeTextInput.style.border = '';
  newIncomeNumInput.style.border = '';
  incomeItem[0].parentNode.insertBefore(cloneIcomeItem, buttonIncomeAdd);
  incomeItem = document.querySelectorAll('.income-items');
  if (incomeItem.length === 3) {
    buttonIncomeAdd.style.display = 'none';
  }
  newIncomeTextInput.addEventListener('change', function() {
    if (isNumber(newIncomeTextInput.value.trim()) || !newIncomeTextInput.value.trim().match(regex)) {
      newIncomeTextInput.style.border = '2px solid red';
      alert('Введите корректные данные');
    } else {
      newIncomeTextInput.style.border = '2px solid green';
    }
  });
  newIncomeNumInput.addEventListener('change', function() {
    if (!isNumber(newIncomeNumInput.value.trim())) {
      newIncomeNumInput.style.border = '2px solid red';
      alert('Введите корректные данные');
    } else {
      newIncomeNumInput.style.border = '2px solid green';
    }
  });
};


AppData.prototype.getExpenses = function() {
  const _this = this;
  expensesItems.forEach(function(item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = parseFloat(item.querySelector('.expenses-amount').value);
    if (itemExpenses !== '' && cashExpenses !== '') {
      _this.expenses[itemExpenses] = cashExpenses;
    }
  });
};

AppData.prototype.getIncome = function() {
  const _this = this;
  incomeItem.forEach(function(item) {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = parseFloat(item.querySelector('.income-amount').value);
    if (itemIncome !== '' && cashIncome !== '') {
      _this.income[itemIncome] = cashIncome;
      _this.incomeMonth += cashIncome;
    }
  });
};

AppData.prototype.getAddExpenses = function() {
  const _this = this;
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach(function(item) {
    item = item.trim();
    if (item !== '') {
      _this.addExpenses.push(item);
    }
  });
};

AppData.prototype.getAddIncome = function() {
  const _this = this;
  additionalIncomeInputs.forEach(function(item) {
    let itemValue = item.value.trim();
    if (itemValue !== '') {
      _this.addIncome.push(itemValue);
    }
  });
};

AppData.prototype.getExpensesMonth = function () { 
  for (let key in this.expenses) {
    this.expensesMonth += this.expenses[key];
  }
  return this.expensesMonth;
};

AppData.prototype.getBudget = function () {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  this.budgetDay = Math.floor(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function () {
  return targetAmountElement.value / this.budgetMonth; 
};

AppData.prototype.getStatusIncome = function () {
  if (this.budgetDay >= 1200) {
    return 'У вас высокий уровень дохода';
  } else if (this.budgetDay >= 600 && this.budgetDay < 1200) { 
    return 'У вас средний уровень дохода';
  } else if (this.budgetDay < 600 && this.budgetDay >= 0) {
    return 'К сожалению, у вас уровень дохода ниже среднего';
  } else if (this.budgetDay < 0) {
    return 'Что-то пошло не так';
  }
};

AppData.prototype.getInfoDeposit = function() {
  if (this.deposit) {
    let percentDeposit;
    let moneyDeposit;
    do {
      percentDeposit = prompt('Какой годовой процент?', '10');
    } while (!isNumber(percentDeposit));
    do {
      moneyDeposit = prompt('Какая сумма заложена ?', '10000');
    } while (!isNumber(moneyDeposit));
  }
};

AppData.prototype.calcSavedMoney = function() {
  return this.budgetMonth * periodSelectElement.value;
};
AppData.prototype.EventListeners = function() {
  buttonStart.disabled = true;
  salaryAmount.addEventListener('input', function(){
    if (salaryAmount.value.trim() === '') {
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
    }
  });

  function hardBind() {
    buttonStart.style.display = 'none';
    buttonCancel.style.display = 'block';
    appData.start.apply(appData);
  }

  buttonStart.addEventListener('click', hardBind);
  buttonCancel.addEventListener('click', appData.cancel);
  buttonExpensesAdd.addEventListener('click', appData.addExpensesBlock);
  buttonIncomeAdd.addEventListener('click', appData.addIncomeBlock);
  periodSelectElement.addEventListener('input', function() {
    periodAmount.textContent = periodSelectElement.value;
  });

  textInputs.forEach(function(item) {
    item.addEventListener('change', function() {
      if (isNumber(item.value.trim()) || !item.value.trim().match(regex)) {
        item.style.border = '2px solid red';
        alert('Введите корректные данные');
      } else {
        item.style.border = '2px solid green';
      }
    });
  });

  numInputs.forEach(function(item) {
    item.addEventListener('change', function() {
      if (!isNumber(item.value.trim())) {
        item.style.border = '2px solid red';
        alert('Введите корректные данные');
      } else {
        item.style.border = '2px solid green';
      }
    });
});
};

const appData = new AppData();
appData.EventListeners();

