let myLibrary = [];
let myList = document.querySelector('.book-list')
let submitBtn = document.querySelector('.submit')

submitBtn.addEventListener('click', function(){
    const newBook = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').value
    )
    addBookToLibrary(newBook)
    listItem = document.createElement('li')
    listItem.appendChild(document.createTextNode(`${newBook.info()}`))
    myList.append(listItem);
})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function displayLibrary(){
    for(i = 0; i < myLibrary.length; i++){
        listItem = document.createElement('li')
        listItem.appendChild(document.createTextNode(`${myLibrary[i].info()}`))
        myList.append(listItem);
    }
}

const atl = new Book('Atlas Shrugged', 'Ayn Rand', 1000, 'not read')

addBookToLibrary(atl)
displayLibrary()
