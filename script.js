const myLibrary = [];
let openModal = document
  .querySelector("#openModal")
  .addEventListener("click", () => {
    document.querySelector("#modal").showModal();
  });

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}
addBookToLibrary("narnia", "Luis", "700", true);
for (let book in myLibrary) {
  console.log(book.title);
}
