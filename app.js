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

function displayLibrary(){
    for(i = 0; i < myLibrary.length; i++){
        listItem = document.createElement('li').innerText = `${myLibrary[i].info()}`
        myList.append(listItem);
    }
}

addBookToLibrary('Atlas Shrugged', 'Ayn Rand', 1000, 'not read')

displayLibrary()
