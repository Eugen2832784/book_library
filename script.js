const myLibrary = [];
const mainCont = document.querySelector(".main");
let openModal = document
  .querySelector("#openModal")
  .addEventListener("click", () => {
    document.querySelector("#modal").showModal();
  });
let submit = document.querySelector("#submit");
submit.addEventListener("click", () => {
  const title = document.querySelector(".titleInput");
  const author = document.querySelector(".authorInput");
  const pages = document.querySelector(".pagesInput");
  const read = document.querySelector(".readInput");
  if (
    title.value.trim() !== "" &&
    author.value.trim() !== "" &&
    pages.value.trim() !== ""
  ) {
    addBookToLibrary(title.value, author.value, pages.value, read.checked);
  }
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
});
const closeBtn = document.querySelector("#close");
closeBtn.addEventListener("click", () => {
  document.querySelector(".titleInput").value = "";
  document.querySelector(".authorInput").value = "";
  document.querySelector(".pagesInput").value = "";
  document.querySelector(".readInput").checked = false;
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
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");
  const titleText = document.createElement("p");
  titleText.classList.add("titleText");
  titleText.textContent = '"' + newBook.title + '"';
  const authorText = document.createElement("p");
  authorText.classList.add("authorText");
  authorText.textContent = newBook.author;
  const pagesText = document.createElement("p");
  pagesText.classList.add("pagesText");
  pagesText.textContent = newBook.pages + " pages";
  const readButton = document.createElement("button");
  const removeButton = document.createElement("button");
  removeButton.classList.add("removeButton");
  removeButton.textContent = "Remove";
  if (newBook.read) {
    readButton.textContent = "Read";
    readButton.classList.add("alreadyReadButton");
  } else {
    readButton.textContent = "Not Read";
    readButton.classList.add("notReadButton");
  }

  readButton.addEventListener("click", () => {
    newBook.read = !newBook.read;

    if (newBook.read) {
      readButton.textContent = "Read";
      readButton.classList.replace("notReadButton", "alreadyReadButton");
    } else {
      readButton.textContent = "Not Read";
      readButton.classList.replace("alreadyReadButton", "notReadButton");
    }
  });
  cardContainer.append(
    titleText,
    authorText,
    pagesText,
    readButton,
    removeButton,
  );
  mainCont.append(cardContainer);
  removeButton.addEventListener("click", () => {
    cardContainer.remove();
  });
}
