import {customer, bookingData, customerData, promiseAll, roomData} from './apiCalls';

import { displayCustomerBookings, displayTotalAmountSpent } from './domUpdates';
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'

window.addEventListener('load', () => {
  promiseAll().then(data => {
    console.log(customer)
    console.log(customerData)
    console.log(bookingData)
    console.log(roomData)
    displayCustomerBookings()
    displayTotalAmountSpent()
    
  });
});

  

