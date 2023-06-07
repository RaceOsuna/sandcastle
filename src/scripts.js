// import {customer, bookingData, customerData, promiseAll, roomData} from './apiCalls';
import { customerData } from './data/mockCustomers';

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'

let customer

window.addEventListener('load', () => {
  
  const selectRandomUser = (data) => {
    const index = Math.floor(Math.random() * data.length - 1);
    const aUser = data[index];
    return aUser;
  }

  customer = selectRandomUser(customerData);
  
  console.log(customer)
  // promiseAll().then(data => {
  //   console.log(customer)
  //   console.log(customerData)
  //   console.log(bookingData)
  //   console.log(roomData)
  // });
});

  

