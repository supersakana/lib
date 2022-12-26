let myLibrary = [];
let ul = document.querySelector('.book-list')
let submitBtn = document.querySelector('.submit')
let inputs = document.querySelectorAll('.form-input')

// adds book to the library and appends on page
submitBtn.addEventListener('click', function(){
    const newBook = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').value
    )
    addBookToLibrary(newBook)
    appendBook(newBook)
    clearInputs()
})

// Book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

// Adds book to library array
function addBookToLibrary(book) {
  myLibrary.push(book)
}

// appends book to the DOM as li
function appendBook(book) {
    li = document.createElement('li')
    li.appendChild(document.createTextNode(`${book.info()}`))
    ul.append(li);
}

// clears form inputs after submission
function clearInputs() {
    inputs.forEach((input)=> {
        input.value = ''
    })
}

// displays each book in the library
function displayLibrary(){
    myLibrary.forEach((book)=> {
        appendBook(book)
    })
}

const atl = new Book('Atlas Shrugged', 'Ayn Rand', 1000, 'not read')

addBookToLibrary(atl)
displayLibrary()
