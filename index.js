import BookLibrary from './modules/awesome.js';
import { navItems } from './modules/main.js';
import addNavSection from './modules/link.js';

// Date in html
const dt = luxon.DateTime.now(); // eslint-disable-line
document.getElementById('show-date').innerText = dt.toLocaleString(luxon.DateTime.DATETIME_MED); // eslint-disable-line

const books = new BookLibrary();

window.onload = () => {
  books.display();
};

const putBookForm = document.getElementById('put-book');
putBookForm.addEventListener('submit', (e) => {
  books.onAddBook(e);
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', (e) => {
    navItems.forEach((n) => {
      n.classList.remove('active');
    });
    addNavSection(e);
  });
});