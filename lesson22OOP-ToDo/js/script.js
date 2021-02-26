/* eslint-disable linebreak-style */
class Todo {
  constructor(form, input, todoList, todoCompleted) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.todoList = document.querySelector(todoList);
    this.todoCompleted = document.querySelector(todoCompleted);
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
  }

  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
  }

  render() {
    this.todoList.textContent = '';
    this.todoCompleted.textContent = '';
    this.todoData.forEach(this.createItem, this);
    this.addToStorage();
  }

  createItem(todo) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.key = todo.key;
    li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
        <div class="todo-buttons">
        <button class="todo-remove"></button>
        <button class="todo-complete"></button>
        </div>`
    );

    if (todo.todoCompleted) {
      this.todoCompleted.append(li);
    } else {
      this.todoList.append(li);
    }
  }

  addTodo(e) {
    e.preventDefault();
    if (this.input.value.trim()) {
      const newTodo = {
        value: this.input.value,
        todoCompleted: false,
        key: this.generateKey(),
      };
      this.todoData.set(newTodo.key, newTodo);
      this.render();
    } else {
      alert('Пустое поле добавить нельзя');
    }
  }

  generateKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  deleteItem() {

  }

  completeItem() {

  }

  handler() {
    this.todoList.addEventListener('click', event => {
      const target = event.target;
      if (target.closest('button.todo-complete')) {
        const items = JSON.parse(localStorage.getItem('toDoList'));
        const todoItem = target.closest('.todo-item');
        items.forEach(item => {
          if (item[0] === todoItem.key) {
            item[1].todoCompleted = true;
            this.todoData = new Map(items);
            this.render();
          }
        });
      }
    });
    this.todoCompleted.addEventListener('click', event => {
      const target = event.target;
      if (target.closest('button.todo-complete')) {
        const items = JSON.parse(localStorage.getItem('toDoList'));
        const todoItem = target.closest('.todo-item');
        items.forEach(item => {
          if (item[0] === todoItem.key) {
            item[1].todoCompleted = false;
            this.todoData = new Map(items);
            this.render();
          }
        });
      }
    });
  }

  init() {
    this.form.addEventListener('submit', this.addTodo.bind(this));
    this.render();
  }
}
const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();
todo.handler();
