/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.querySelector('#cart tbody');
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

let tbody;
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  tbody = document.querySelector('#cart tbody');

  // TODO: Find the table body
  for (let i in cart.items) {
    console.log('i is ' + i);
    let trElement = document.createElement('tr');
    let deleteElement = document.createElement('td');
    let qtyElement = document.createElement('td'); 
    let itemElement = document.createElement('td');
    tbody.appendChild(trElement);
    trElement.appendChild(itemElement);
    trElement.appendChild(qtyElement);
    trElement.appendChild(deleteElement);


    deleteElement.textContent = 'X';
    deleteElement.classList.add('delete');
    deleteElement.id = i;
    qtyElement.textContent = cart.items[i].quantity;
    itemElement.textContent = cart.items[i].product;
  }
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
 if (event.target.classList.contains('delete')) {
    cart.removeItem(parseInt(event.target.id));
    // event.target.parentElement.remove();
    console.log(event);
    let item = event.target.parentElement.firstChild.textContent;
    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    cart.removeItem(item);
    // TODO: Save the cart back to local storage
    cart.saveToLocalStorage();
    // TODO: Re-draw the cart table
    renderCart();
 }
}

// This will initialize the page and draw the cart on screen
renderCart();
