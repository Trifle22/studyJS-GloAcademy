let money, income, addExpenses, deposit, mission, period, budgetDay;


money = 50000;
income = 'инвестиции';
addExpenses = 'интернет, телефон, проезд';
deposit = true;
mission = 500000;
period = 6;
budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель -  заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);