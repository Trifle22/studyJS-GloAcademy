'use strict';

const buttonStart = document.getElementById('start');
const buttonCancel = document.getElementById('cancel');
const buttonIncomeAdd = document.getElementsByTagName('button')[0];
const buttonExpensesAdd = document.getElementsByTagName('button')[1];
const depositCheck = document.querySelector('#deposit-check');
const depositBank = document.querySelector('.deposit-bank');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const additionalIncomeInputs = document.querySelectorAll('.additional_income-item');
const budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
const additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
const targetMonthValue = document.getElementsByClassName('target_month-value')[0];
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitleElement = document.querySelector('.income-title');
const expensesTitleElement = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
const targetAmountElement = document.querySelector('.target-amount');
const periodSelectElement = document.querySelector('.period-select');
const periodAmount = document.querySelector('.period-amount');
let incomeItem = document.querySelectorAll('.income-items');
const textInputs = document.querySelectorAll('input[placeholder="Наименование"]');
const numInputs = document.querySelectorAll('input[placeholder="Сумма"]');
const regex = /^[?!,.а-яА-ЯёЁ]/;

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

class AppData {
  constructor(){
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
  }

  check() {
    if (salaryAmount.value.trim() !== '') {
      buttonStart.removeAttribute('disabled');
    }
  }
  start() {
    let allInputs = document.querySelectorAll("input[type='text']");
    allInputs.forEach((item) => {
      item.disabled = true;
    });
          this.budget = parseFloat(salaryAmount.value);
          this.getExpenses();
          this.getIncome();
          this.getExpensesMonth();
          this.getAddExpenses();
          this.getAddIncome();
          this.getInfoDeposit();
          this.getBudget();
          this.showResult();
  }

  cancel() {
    buttonCancel.style.display = 'none';
    buttonStart.style.display = 'block';
    let allInputs = document.querySelectorAll("input[type='text']");
    allInputs.forEach((item) => {
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
    this.percentDeposit =  0;
    this.moneyDeposit = 0;
    this.period =  3;
    depositCheck.checked = false;
    depositPercent.style.display = 'none';
    depositAmount.style.display = 'none';
    depositBank.style.display = 'none';
  
    function removeInputs() {
      let expensesInputs = document.querySelectorAll('.expenses-items');
      if (expensesInputs.length > 1) {
        expensesInputs.forEach((item, i) => {
          if (i > 0) {
            item.style.display = 'none';
          }
        });
      }
      buttonExpensesAdd.style.display = 'block';
      let incomeInputs = document.querySelectorAll('.income-items');
      if (incomeInputs.length > 1) {
        incomeInputs.forEach((item,i) => {
          if (i > 0) {
            item.style.display = 'none';
          }
        });
      }
      buttonIncomeAdd.style.display = 'block';
    }
    removeInputs();
  }
  showResult() {
    periodSelectElement.addEventListener('input', () => {
      incomePeriodValue.value = this.budgetMonth * parseInt(periodSelectElement.value);
    });
  
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcSavedMoney();
  }

  addExpensesBlock() {
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
    newExpensesTextInput.addEventListener('change', () => {
      if (isNumber(newExpensesTextInput.value.trim()) || !newExpensesTextInput.value.trim().match(regex)) {
        newExpensesTextInput.style.border = '2px solid red';
        alert('Введите корректные данные');
      } else {
        newExpensesTextInput.style.border = '2px solid green';
      }
    });
    newExpensesNumInput.addEventListener('change', () => {
      if (!isNumber(newExpensesNumInput.value.trim())) {
        newExpensesNumInput.style.border = '2px solid red';
        alert('Введите корректные данные');
      } else {
        newExpensesNumInput.style.border = '2px solid green';
      }
    });
  }

  addIncomeBlock() {
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
    newIncomeTextInput.addEventListener('change', () => {
      if (isNumber(newIncomeTextInput.value.trim()) || !newIncomeTextInput.value.trim().match(regex)) {
        newIncomeTextInput.style.border = '2px solid red';
        alert('Введите корректные данные');
      } else {
        newIncomeTextInput.style.border = '2px solid green';
      }
    });
    newIncomeNumInput.addEventListener('change', () => {
      if (!isNumber(newIncomeNumInput.value.trim())) {
        newIncomeNumInput.style.border = '2px solid red';
        alert('Введите корректные данные');
      } else {
        newIncomeNumInput.style.border = '2px solid green';
      }
    });
  }

  getExpenses() {
    expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = parseFloat(item.querySelector('.expenses-amount').value);
      if (itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = cashExpenses;
      }
    });
  }

  getIncome() {
    incomeItem.forEach((item) => {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = parseFloat(item.querySelector('.income-amount').value);
      if (itemIncome !== '' && cashIncome !== '') {
        this.income[itemIncome] = cashIncome;
        this.incomeMonth += cashIncome;
      }
    });
  }

  getAddExpenses() {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  }

  getAddIncome() {
    additionalIncomeInputs.forEach((item) => {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  }

  getExpensesMonth() { 
    for (let key in this.expenses) {
      this.expensesMonth += this.expenses[key];
    }
    return this.expensesMonth;
  }

  getBudget() {
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);

    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }

  getTargetMonth() {
    return targetAmountElement.value / this.budgetMonth; 
  }

  getStatusIncome() {
    if (this.budgetDay >= 1200) {
      return 'У вас высокий уровень дохода';
    } else if (this.budgetDay >= 600 && this.budgetDay < 1200) { 
      return 'У вас средний уровень дохода';
    } else if (this.budgetDay < 600 && this.budgetDay >= 0) {
      return 'К сожалению, у вас уровень дохода ниже среднего';
    } else if (this.budgetDay < 0) {
      return 'Что-то пошло не так';
    }
  }

  calcSavedMoney() {
    return this.budgetMonth * periodSelectElement.value;
  }

  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
  }


  changePercent() {
    const valueSelect = this.value;
    if (valueSelect === 'other') {
      depositPercent.style.display = 'inline-block';
      depositPercent.disabled = false;
      depositPercent.value = '';
      depositPercent.addEventListener('change', () => {
        if (isNumber(depositPercent.value.trim()) ||
        parseFloat(depositPercent.value.trim()) > 0 || 
        parseFloat(depositPercent.value.trim()) < 100 ||
        depositPercent.value.trim() !== '') {
          this.percentDeposit = depositPercent.value;
        } else {
          alert('Введите корректные данные в полe процент');
        }
      });
    } else {
      depositPercent.value = valueSelect;
    }
  }

  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePercent);
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositBank.value = '';
      depositAmount.value = '';
      this.deposit = false;
      depositBank.removeEventListener('change', this.changePercent);
    }
  }

  EventListeners() {
    buttonStart.disabled = true;
    salaryAmount.addEventListener('input', () => {
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
  
    textInputs.forEach((item) => {
      item.addEventListener('change', () => {
        if (isNumber(item.value.trim()) || !item.value.trim().match(regex)) {
          item.style.border = '2px solid red';
          alert('Введите корректные данные');
        } else {
          item.style.border = '2px solid green';
        }
      });
    });
  
    numInputs.forEach((item) => {
      item.addEventListener('change', () => {
        if (!isNumber(item.value.trim())) {
          item.style.border = '2px solid red';
          alert('Введите корректные данные');
        } else {
          item.style.border = '2px solid green';
        }
      });
    });

    depositCheck.addEventListener('change', this.depositHandler.bind(this));
  }
}


const appData = new AppData();
appData.EventListeners();

