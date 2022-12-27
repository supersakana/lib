let myLibrary = [];
let ul = document.querySelector('.book-list')
let submitBtn = document.querySelector('.submit-btn')
let inputs = document.querySelectorAll('.form-input')

// adds book to the library and appends on page
submitBtn.addEventListener('click', function(){
    const newBook = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').checked
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
        return `${title} by ${author}, ${pages} pages`
    }
}

// Adds book to library array
function addBookToLibrary(book) {
  myLibrary.push(book)
}

// appends book to the DOM as li along with delete button
function appendBook(book) {
    let li = document.createElement('li')
    let p = document.createElement('p')
    let deleteBtn = document.createElement('button')
    let readBtn = document.createElement('input')
    let btnContainer = document.createElement('div')

    p.innerHTML = `${book.info()}`
    deleteBtn.innerHTML = 'delete'
    readBtn.type = 'checkbox'
    if (book.read == true){
        readBtn.checked = true

    } else {
        readBtn.checked = false
    }
    
    li.id = `item-${myLibrary.indexOf(book)}`
    li.classList.add('flex', 'items-center', 'justify-between')
    deleteBtn.dataset.index = myLibrary.indexOf(book)
    deleteBtn.classList.add('text-red-500', 'ml-3', 'delete-btn')


    deleteBtn.addEventListener('click', function(){
        item = document.getElementById(`item-${deleteBtn.dataset.index}`)
        item.remove()
    })

    ul.append(li);
    li.append(p);
    li.append(btnContainer);
    btnContainer.append(readBtn)
    btnContainer.append(deleteBtn)
}

// clears form inputs after submission
function clearInputs() {
    inputs.forEach((input)=> {
        input.value = ''
        input.checked = false
    })
}

// displays each book in the library
function displayLibrary(){
    myLibrary.forEach((book)=> {
        appendBook(book)
    })
}

const atl = new Book('Atlas Shrugged', 'Ayn Rand', 1000, false)

addBookToLibrary(atl)
displayLibrary()
