export default class ManageBooks {
  constructor() {
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books'));
    } else {
      this.books = [];
    }
  }
};