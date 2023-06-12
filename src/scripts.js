import {customer ,bookingData, customerData, roomData, bookRoom, getUpdatedBookings} from './apiCalls';

import {displayFilteredRooms, displayRoomsByType, hide, show, confirmBooking, loginCustomer, displayCustomerBookings, displayCustomerName, displayTotalAmountSpent } from './domUpdates';
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/turing-logo.png'
const customerBookings = document.querySelector('.user-bookings')
const form = document.querySelector('.booking-form')
const selectedDate = document.querySelector('.date')
const roomsDisplay = document.querySelector('.available-rooms')
const roomsSection = document.querySelector('.available-section')
const roomTypes = document.querySelector('.room-types')
const cornerDate = document.querySelector('.corner-date')
const username = document.getElementById('username')
const password = document.getElementById('password')
const overlay = document.querySelector('.overlay')
const loginButton = document.querySelector('.login-button')
const logoutButton = document.querySelector('.log-out')

loginButton.addEventListener('click', (event) => {
  event.preventDefault()
  customer = loginCustomer()
  if (customer) {
  hide(overlay)
  displayCustomerName()
  displayCustomerBookings()
  displayTotalAmountSpent()
  } else {
  show(overlay)
  }
  return customer
})

form.addEventListener('submit', (event) => {
  event.preventDefault()
  displayFilteredRooms()
  show(roomsSection)
})

roomTypes.addEventListener('change', (event) => {
  event.preventDefault
  displayRoomsByType()
})

roomsDisplay.addEventListener('click', (event) => {
  const date = event.target.value
  const num = Number(event.target.id)
  if (event.target.className === "book-button") {
    bookRoom(date, num)
    event.target.disabled = true
    confirmBooking()
  }
  setTimeout(getUpdatedBookings, 2000)
})

logoutButton.addEventListener('click', () => {
  show(overlay)
  window.location.reload()
})

export {selectedDate, roomsDisplay, roomTypes, cornerDate, username, password, loginButton}
