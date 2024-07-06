/*
 * Menu Item
 *1. Steak @ $4.50
 *2. Chips @ $1.00
 *3. Dessert @ $10.00
 */

function order() {
  let userName = prompt(
    "Hello, can you please enter your Name below and click ok."
  );
  let item = prompt(
    `Greetings ${userName}, May you kindly enter your choice e.g simply type 1 if you want to purchase the first item.`
  );
  item = Number(item);

  switch (item) {
    case 1:
      document.getElementById(
        "receipt-text"
      ).innerHTML = `Your Order Number ${item} is ready for collection.`;
      break;
    case 2:
      document.getElementById(
        "receipt-text"
      ).innerHTML = `Your Order Number ${item} is ready for collection.`;
      break;
    case 3:
      document.getElementById(
        "receipt-text"
      ).innerHTML = `Your Order Number ${item} is ready for collection.`;
      break;
    default:
      document.getElementById(
        "receipt-text"
      ).innerHTML = `Kindly enter a valid input.`;
  }
}
