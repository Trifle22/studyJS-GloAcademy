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
    const now = Date.now();
    if (now - todo.clickTimeCompleted <= 2) {
      li.classList.add('todo-item-animated');
    } else {
      li.classList.remove('todo-item-animated');
    }
    li.classList.add('todo-item');
    li.key = todo.key;
    li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
        <div class="todo-buttons">
        <button class="todo-remove"></button>
        <button class="todo-complete"></button>
        <button class="todo-edit"></button>
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
        clickTimeCompleted: 0,
      };
      this.todoData.set(newTodo.key, newTodo);
      this.input.value = '';
      this.render();
    } else {
      alert('Пустое поле добавить нельзя');
    }
  }

  generateKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  contentEdit(item) {
    console.log(item);
    alert('Кликните на текст задачи, затем отредактируйте его, для сохранения нажмите Enter');
    const todoText = item.querySelector('span');
    todoText.setAttribute('contenteditable', true);
    document.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        console.log(todoText.textContent);
        event.preventDefault();
        todoText.setAttribute('contenteditable', false);
        this.todoData.forEach(elem => {
          if (elem.key === item.key) {
            elem.value = todoText.textContent;
          }
        });
        localStorage.toDoList = JSON.stringify([...this.todoData]);
        this.render();
      }
    });
  }


  handler() {
    // todoList listener
    this.todoList.addEventListener('click', event => {
      const target = event.target;
      if (target.closest('button.todo-complete')) {
        const items = JSON.parse(localStorage.getItem('toDoList'));
        const todoItem = target.closest('.todo-item');
        items.forEach(item => {
          if (item[0] === todoItem.key) {
            item[1].clickTimeCompleted = Date.now();
            item[1].todoCompleted = true;
            this.todoData = new Map(items);
            this.render();
          }
        });
      } else if (target.closest('.todo-remove')) {
        const items = JSON.parse(localStorage.getItem('toDoList'));
        const todoItem = target.closest('.todo-item');
        items.forEach((item, i) => {
          if (item[0] === todoItem.key) {
            if (this.todoList.children[i]) {
              this.todoList.children[i].classList.add('todo-item-delete-animated');
            }
            delete items[i];
            this.todoData = items.length > 1 ? new Map(items.filter(item => item)) : new Map([]);
            setTimeout(() => {
              this.render();
            }, 510);
          }
        });
      } else if (target.closest('.todo-edit')) {
        const todoItem = target.closest('.todo-item');
        this.contentEdit(todoItem);
      }
    });
    //completed listener
    this.todoCompleted.addEventListener('click', event => {
      const target = event.target;
      if (target.closest('button.todo-complete')) {
        const items = JSON.parse(localStorage.getItem('toDoList'));
        const todoItem = target.closest('.todo-item');
        items.forEach(item => {
          if (item[0] === todoItem.key) {
            item[1].clickTimeCompleted = Date.now();
            item[1].todoCompleted = false;
            this.todoData = new Map(items);
            this.render();
          }
        });
      } else if (target.closest('.todo-remove')) {
        const items = JSON.parse(localStorage.getItem('toDoList'));
        const todoItem = target.closest('.todo-item');
        items.forEach((item, i) => {
          if (item[0] === todoItem.key) {
            if (this.todoCompleted.children[i]) {
              this.todoCompleted.children[i].classList.add('todo-item-delete-animated');
            }
            delete items[i];
            this.todoData = items.length > 1 ? new Map(items.filter(item => item)) : new Map([]);
            setTimeout(() => {
              this.render();
            }, 510);
          }
        });
      } else if (target.closest('.todo-edit')) {
        const todoItem = target.closest('.todo-item');
        this.contentEdit(todoItem);
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
