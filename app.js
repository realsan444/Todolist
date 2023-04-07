const homeButton = document.getElementById('home-button');
const emailButton = document.getElementById('email-button');
const todoContainer = document.querySelector('.todo-container');
const emailContainer = document.querySelector('.email-container');
const itemInput = document.getElementById('item-input');
const itemsList = document.getElementById('items');
let items = JSON.parse(localStorage.getItem('todoItems')) || [];

// Show the todo container by default
homeButton.classList.add('active');
emailButton.classList.remove('active');
todoContainer.style.display = 'block';
emailContainer.style.display = 'none';

// Render the initial list of items
renderItems();

// Handle adding a new item
function addItem(event) {
  event.preventDefault();
  const newItem = itemInput.value.trim();
  if (newItem) {
    items.push(newItem);
    renderItems();
    itemInput.value = '';
    saveItems();
  }
}

// Handle deleting an item
function deleteItem(event) {
  if (event.target.tagName.toLowerCase() === 'button') {
    const index = parseInt(event.target.parentElement.dataset.index);
    items.splice(index, 1);
    renderItems();
    saveItems();
  }
}

// Render the list of items
function renderItems() {
  itemsList.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerText = item;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    li.appendChild(deleteButton);
    li.dataset.index = index;
    itemsList.appendChild(li);
  });
}

// Save the list of items to local storage
function saveItems() {
  localStorage.setItem('todoItems', JSON.stringify(items));
}

// Handle submitting the contact form
function submitContactForm(event) {
  event.preventDefault();
  // Replace with your own email sending code
  console.log('Sending email...');
  // Clear the form fields
  document.getElementById('name-input').value = '';
  document.getElementById('email-input').value = '';
  document.getElementById('message-input').value = '';
}

// Add event listeners
document.getElementById('add-button').addEventListener('click', addItem);
itemsList.addEventListener('click', deleteItem);
document.getElementById('contact-form').addEventListener('submit', submitContactForm);
