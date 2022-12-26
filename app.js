let myLibrary = [];
let myList = document.querySelector('.book-list')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
}

// addBookToLibrary('Atlas Shrugged', 'Ayn Rand', 1000, 'not read')
// console.log(myLibrary[0].title)