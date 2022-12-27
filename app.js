let myLibrary = [];
let ul = document.querySelector('.book-list')
let submitBtn = document.querySelector('.submit-btn')
let inputs = document.querySelectorAll('.form-input')

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

// adds book to the library and appends on page
submitBtn.addEventListener('click', function(){
    const newBook = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').checked
    )
    newBook.addToLibrary()
    newBook.appendBook()
    clearInputs()
})

// adds book to library array
Book.prototype.addToLibrary = function(){
    myLibrary.push(this);
}

Book.prototype.appendBook = function(){
    let li = newItem(this)
    let p = document.createElement('p').innerHTML = `${this.info()}`
    let deleteBtn = createDelete(this)
    let readBtn = createBox(this)
    let div = document.createElement('div')

    deleteBtn.addEventListener('click', function(){
        item = document.getElementById(`item-${deleteBtn.dataset.index}`)
        item.remove()
    })

    ul.append(li);
    li.append(p);
    li.append(div);
    div.append(readBtn)
    div.append(deleteBtn)
}

// create the list item for library
function newItem(book){
    item = document.createElement('li')
    item.id = `item-${myLibrary.indexOf(book)}`
    item.classList.add('flex', 'items-center', 'justify-between')

    return item
}

// create the delete button
function createDelete(book){
    btn = document.createElement('button');
    btn.innerHTML = 'delete'
    btn.dataset.index = myLibrary.indexOf(book)
    btn.classList.add('text-red-500', 'ml-3', 'delete-btn')

    return btn
}

// creates the read checkbox
function createBox(book){
    box = document.createElement('input')
    box.type = 'checkbox'
    if (book.read == true){
        box.checked = true

    } else {
        box.checked = false
    }

    return box
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