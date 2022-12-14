const generateId = () =>
  Date.now().toString(36) + Math.random().toString(36).substring(2);

export default class Book {
  constructor(name, writer) {
    this.id = generateId();
    this.name = name;
    this.writer = writer;
  }
}
