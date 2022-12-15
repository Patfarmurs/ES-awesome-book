import Book from './book.js';
import { bookSection, addBookSection, contractSection } from './main.js';

export default class BookLibrary {
  constructor() {
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books'));
    } else {
      this.books = [];
    }
  }

  put(name, writer) {
    const book = new Book(name, writer);
    this.books.push(book);
    this.save();
    this.display();
  }

  save() {
    if (this.books.length > 0) {
      localStorage.setItem('books', JSON.stringify(this.books));
    } else {
      localStorage.removeItem('books');
    }
  }

  delete(e) {
    const { id } = e.target;
    this.books = this.books.filter((book) => id !== book.id);
    this.save();
    this.display();
  }

  display() {
    const bookList = document.querySelector('.books-list');
    if (this.books.length > 0) {
      bookList.innerText = '';
      //  books ui
      this.books.forEach((book) => {
        //  book item
        const li = document.createElement('li');
        li.innerHTML = `<h4><span class="book-name">${book.name}</span> by <span class="book-writer">${book.writer}</span></h4>`;
        li.className = 'book-item';

        // Remove
        const btn = document.createElement('button');
        btn.id = book.id;
        btn.className = 'btn-remove';
        btn.innerText = 'Remove';
        btn.addEventListener('click', (e) => {
          this.delete(e);
        });

        // append li and btn
        li.appendChild(btn);
        bookList.appendChild(li);
      });
    } else {
      bookList.innerText = 'Empty Book list';
    }
  }

  onAddBook(e) {
    e.preventDefault();
    const name = document.getElementById('name');
    const writer = document.getElementById('writer');
    const err = document.querySelector('.error');
    if (name.value.trim() === '' || writer.value.trim() === '') {
      err.innerText = 'No Book is added!, Please fill all fields to Procced.';
    } else {
      err.innerText = '';
      this.put(name.value, writer.value);
      name.value = '';
      writer.value = '';
      bookSection.classList.put('slide-in');
      addBookSection.classList.remove('slide-in');
      contractSection.classList.remove('slide-in');
      document.getElementById('add-new-book').classList.remove('active');
      document.getElementById('books').classList.add('active');
    }
  }
}