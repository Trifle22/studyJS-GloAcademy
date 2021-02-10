let books = document.querySelectorAll('.book');
let booksWrapper = document.querySelector('.books');
let book3Title = books[4].querySelector('a');

document.querySelector('.adv').remove();

books[0].before(books[1]);
books[5].after(books[2]);
books[0].after(books[4]);

document.body.style.backgroundImage = 'url("image/you-dont-know-js.jpg")';

book3Title.textContent = 'Книга 3. this и Прототипы объектов';

books[0].querySelector('ul').querySelectorAll('li')[3].after(books[0].querySelector('ul').querySelectorAll('li')[6]);
books[0].querySelector('ul').querySelectorAll('li')[4].after(books[0].querySelector('ul').querySelectorAll('li')[8]);
books[0].querySelector('ul').querySelectorAll('li')[9].after(books[0].querySelector('ul').querySelectorAll('li')[2]);

books[5].querySelector('ul').querySelectorAll('li')[1].after(books[5].querySelector('ul').querySelectorAll('li')[9]);
books[5].querySelector('ul').querySelectorAll('li')[9].after(books[5].querySelector('ul').querySelectorAll('li')[3]);
books[5].querySelector('ul').querySelectorAll('li')[5].after(books[5].querySelector('ul').querySelectorAll('li')[9]);
books[5].querySelector('ul').querySelectorAll('li')[8].after(books[5].querySelector('ul').querySelectorAll('li')[5]);


books[2].
querySelector('ul').
querySelectorAll('li')[8].
insertAdjacentHTML('afterend', `<li>Глава 8: За пределами ES6</li>`);

