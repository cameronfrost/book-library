// ES5 VERSION

// Book Constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  // Create TR element
  const row = document.createElement('tr');
  // Insert columns
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.pages}</td>
  <td>${book.isRead}</td>
  <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form')
  container.insertBefore(div, form);
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', 
function (e) {

  // Get form values
 const title = document.getElementById('title').value,
       author = document.getElementById('author').value,
       pages = document.getElementById('pages').value
       isRead = document.querySelector('#read').checked;

  // Instantiate Book
  const book = new Book(title, author, pages, isRead);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || pages === '') {
  // Error Alert
  ui.showAlert('Please fill in all fields', 'error')
  } else {

  

  // Add Book To List
  ui.addBookToList(book);

  // Show Success
  ui.showAlert('Book Added!', 'success');

  // Delete Book
  UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  // Clear Fields
  ui.clearFields();

}

  e.preventDefault();
});

// Delete Book Event Listener 
document.getElementById('book-list').addEventListener('click', function(e) {

 // Instantiate UI
  const ui = new UI();

  ui.deleteBook(e.target);

  ui.showAlert('Book Removed!', 'success');

  e.preventDefault();
});