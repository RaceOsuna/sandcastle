import {customer, bookingData, customerData, roomData} from './apiCalls';

import { displayFilteredRooms } from './domUpdates';
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'

const form = document.querySelector('.booking-form')
const selectedDate = document.querySelector('.date')
// const submitForm = () => {
//   event.preventDefault()
//   const formatDate = selectedDate.value.replaceAll('-', '/')
//   console.log('hello')
// }

// const formattedDate = selectedDate.addEventListener('input', () => {
//   console.log(selectedDate.value)
// })

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(typeof(selectedDate.value))
  displayFilteredRooms()
  // console.log('hello')
  // submitForm()
})

  
export {selectedDate}
