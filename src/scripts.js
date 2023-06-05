import { customersResponse, bookingsResponse, roomsResponse /*customerData, roomData, bookingData*/ } from './apiCalls';

// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'
let customer, customerData, roomData, bookingData

window.addEventListener('load', () => {
  Promise.all([customersResponse, bookingsResponse, roomsResponse]).then(([customers, bookings, rooms]) => {
  
  customerData = customers.customers
  bookingData = bookings.bookings
  roomData = rooms.rooms
  
  const selectRandomUser = (data) => {
    const index = Math.floor(Math.random() * data.length - 1);
    const aUser = data[index];
    return aUser;
  }

  customer = selectRandomUser(customerData);

  console.log(customer)
  console.log(customerData)
  console.log(bookingData)
  console.log(roomData)
  })});

