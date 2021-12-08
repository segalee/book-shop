'use strict';

//BONUS: Add simple paging with Next and Prev buttons
//  update the disabled property of the button appropriately
//BONUS: Add this pages selection ui component

function onOpenReadModal(id) {
    createReadModal(id);
}

function createReadModal(bookIdx) {
    const book = getBookById(bookIdx);
    const elReadModal = document.querySelector('.read-modal');
    elReadModal.style.display = 'block';
    var strHTML = `<button onclick="onCloseReadModal()" class="close-read-modal">x</button>
    <h2>${book.name}</h2>
    <input class="rate" type="number" min="0" max="10" value="${book.rate}">
    <p class="${book.price}$"></p>
    <img src=${book.imgUrl}>
    <p class="desc">${book.desc}</p>`;
    elReadModal.innerHTML = strHTML;
    elReadModal.classList.add('open');
}

function onCloseUpdateModal() {
    document.querySelector('.update-modal').style.display = 'none';
}

function onCloseReadModal() {
    // document.querySelector('.read-modal').classList.remove('open');
    document.querySelector('.read-modal').style.display = 'none';
    // document.querySelector('.close-read-modal').display = 'none';
}

//will prompt for the book new price and call the service's function
//BONUS: Read the data from the user using an <input> instead of prompt
function onUpdateBook(bookId) {
    const elUpdateModal = document.querySelector('.update-modal');
    elUpdateModal.style.display = 'block';
    var strHTML = `<div class="update-modal mb-3">
            
            <div class="mb-3">
                <label for="book-title" class="form-label">Book Title</label>
                <input class="form-label title-input-upd" id="book-title" type="text" placeholder="Book Title">
            </div>
            <div class="mb-3">
                <label for="book-price" class="form-label">New Price</label>
                <input class="form-label price-input-upd" id="book-price" type="number" placeholder="Price ($)">
            </div>
            <div>
            <button onclick="onCloseUpdateModal()" class="btn btn-danger close-upd-modal" type="button">Cancel</button>
            <button onclick="onUpdateUserInfo('${bookId}')" type="submit" class="btn btn-primary" onsubmit="onSubmitForm()">Submit</button> </div></div>`;

    elUpdateModal.innerHTML = strHTML;
}

// get text & price value,  validate if values entered
//update model, render
//save to local storage
//will prompt for the book new price and call the service's function
//BONUS: Read the data from the user using an <input> instead of prompt
function onUpdateUserInfo(id, userTitle, userPrice) {
    var userTitle = document.querySelector('.title-input-upd').value;
    var userPrice = document.querySelector('.price-input-upd').value;
    if (!userTitle || !userPrice) return;
    updateBook(id, userTitle, userPrice);
    renderBooks();
}

//will use the service's function removeBook(bookId)
function onRemoveBook(id) {
    removeBook(id);
    renderBooks();
}

function onCreateBook() {
    var name = document.querySelector('.title-input').value;
    var price = document.querySelector('.price-input').value;

    if (price && name) {
        addBook(name, price);
        renderBooks();
        document.querySelector('.create').style.display = 'block';
    } else {
        return;
    }
}

//will read (prompt) the details from the user: name and price
// then will call a function addBook(name, price)
// renderBooks()
//BONUS: Read the data from the user using an <input> instead of prompt
function onAddBook() {
    document.querySelector('.create-book-modal').style.display = 'block';
    document.querySelector('.create').style.display = 'none';
}

//will render the books with table rows <tr> and <td>
function renderBooks() {
    const books = getBooks();
    // console.log(books);
    const strHTML = books.map((book) => {
        return `<tr>
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.price}</td>

                <td><button onClick ="onOpenReadModal('${book.id}')" class="read">Read</button></td>
                <td><button onClick ="onUpdateBook('${book.id}')" class="update">Update</button></td>
                <td><button onClick ="onRemoveBook('${book.id}')" class="delete">Delete</button></td>
            </tr>`;
    });
    var elTable = document.querySelector('tbody');
    elTable.innerHTML = strHTML.join('');
    // console.log(strHTML);
}