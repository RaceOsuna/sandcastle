import {customer, bookingData, customerData, roomData, bookRoom} from './apiCalls';

import { displayFilteredRooms, displayRoomsByType, hide, show } from './domUpdates';
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'
const homeButton = document.querySelector('.home')
const roomsButton = document.querySelector('.rooms')
const customerBookings = document.querySelector('.user-bookings')
const form = document.querySelector('.booking-form')
const selectedDate = document.querySelector('.date')
const roomsDisplay = document.querySelector('.available-rooms')
const roomsSection = document.querySelector('.available-section')
const roomTypes = document.querySelector('.room-types')
// const bookButton = document.querySelector('.book-button')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  displayFilteredRooms()
  hide(customerBookings)
  show(roomsSection)
})

roomTypes.addEventListener('change', (event) => {
  event.preventDefault
  displayRoomsByType()
})

homeButton.addEventListener('click', () => {
  show(customerBookings)
  hide(roomsSection)
})

roomsButton.addEventListener('click', () => {
  hide(customerBookings)
  show(roomsSection)
})

roomsDisplay.addEventListener('click', (event) => {
  const date = event.target.value
  const num = Number(event.target.id)
  if (event.target.className === "book-button") {
    bookRoom(date, num)
  }
})


export {selectedDate, roomsDisplay, roomTypes}
