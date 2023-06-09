import {customer, bookingData, customerData, roomData} from './apiCalls';

import { displayFilteredRooms, displayRoomsByType, hide, show } from './domUpdates';
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'
const homePage = document.querySelector('.home')
const customerBookings = document.querySelector('.user-bookings')
const form = document.querySelector('.booking-form')
const selectedDate = document.querySelector('.date')
const availableSection = document.querySelector('.available-rooms')
const availableRooms = document.querySelector('.available-section')
const roomTypes = document.querySelector('.room-types')
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
  displayFilteredRooms()
  hide(customerBookings)
  show(availableRooms)
})

roomTypes.addEventListener('change', (event) => {
  event.preventDefault
  displayRoomsByType()
})

homePage.addEventListener('click', () => {
  show(customerBookings)
  hide(availableRooms)
})
  
export {selectedDate, availableSection, roomTypes, homePage}
