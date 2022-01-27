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

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tbody = document.querySelector('#cart tbody');

  // TODO: Find the table body
  for (let i in cart) {
    let trElement = document.createElement('tr');
    let deleteElement = document.createElement('td');
    let qtyElement = document.createElement('td'); 
    let itemElement = document.createElement('td');
    tbody.appendChild(trElement);
    trElement.appendChild(deleteElement);
    trElement.appendChild(qtyElement);
    trElement.appendChild(itemElement);
    deleteElement.textContent = 'X';
    qtyElement.textContent = i.quantity;
    itemElement.textContent = i.product;
  }
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
 if (event.target.innerText === 'X') {
  event.target.parentElement.remove();
 }
  console.log(event.target.parentElement);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
