import { getCustomerBookings, getTotalAmountSpent, filterRoomsByDate, filterByRoomType, displayNoRoomsAvailableMessage } from "./dataMethods";
import {customerData, bookingData, roomData } from "./apiCalls";
import { selectedDate, roomsDisplay, roomTypes, cornerDate, username, password, customer } from "./scripts";

let allAvailableRooms = []

const hide = (element) => {
  element.classList.add('hidden')
}

const show = (element) => {
  element.classList.remove('hidden')
}

const displayCustomerName = () => {
  const welcome = document.querySelector('.welcome')
  welcome.innerText += `Welcome ${customer.name.split(' ')[0]}!`
}

const displayCustomerBookings = () => {
  const bookings = getCustomerBookings(customer, bookingData)
  const bookingsSection = document.querySelector('.customer-bookings')
  bookingsSection.innerHTML = ''
  bookings.forEach((booking) => {
    bookingsSection.innerHTML +=
    `
    <div tabIndex="0" class="bkg">
      <p>Date: ${booking.date}</p>
      <p>Room Number: ${booking.roomNumber}</p>
    </div>
    `
  })
}

const displayTotalAmountSpent = () => {
  const total = getTotalAmountSpent(customer, bookingData, roomData)
  const dollars = document.querySelector('.dollars')
  dollars.innerText = `ATM: $${total}`
}

const displayFilteredRooms = () => {
  allAvailableRooms = []
  roomsDisplay.innerHTML = ''
  const formattedDate = selectedDate.value.replaceAll('-', '/')
  const dd = formattedDate.split('/').map(num => Number(num))
  cornerDate.innerText = `${new Date(dd[0], dd[1] - 1, dd[2]).toDateString()}`
  const availableRooms = filterRoomsByDate(bookingData, roomData, formattedDate)
  availableRooms.forEach((room) => {
    allAvailableRooms.push(room)
    roomsDisplay.innerHTML += 
    `
    <div tabIndex="0" class="room">
      <p>Room Number: ${room.number}</p>
      <p>Room Type: ${room.roomType}</p>
      <p>Bidet: ${room.bidet}</p>
      <p>Bed Size: ${room.bedSize}</p>
      <p>Beds: ${room.numBeds}</p>
      <p>Nightly Rate: ${room.costPerNight}</p>
      <button class="book-button" id="${room.number}" value="${formattedDate}">Book Now</button>
    </div>
    `
  })
  if (displayNoRoomsAvailableMessage(allAvailableRooms)) {
    roomsDisplay.innerHTML = `${displayNoRoomsAvailableMessage(allAvailableRooms)}`
  }
}

const displayRoomsByType = () => {
  roomsDisplay.innerHTML = ''
  const formattedDate = selectedDate.value.replaceAll('-', '/')
  const rooms = filterByRoomType(allAvailableRooms, roomTypes.value)
  displayNoRoomsAvailableMessage(rooms)
  rooms.forEach((room) => {
    roomsDisplay.innerHTML += 
    `
    <div tabIndex="0" class="room">
      <p>Room Number: ${room.number}</p>
      <p>Room Type: ${room.roomType}</p>
      <p>Bidet: ${room.bidet}</p>
      <p>Bed Size: ${room.bedSize}</p>
      <p>Beds: ${room.numBeds}</p>
      <p>Nightly Rate: ${room.costPerNight}</p>
      <button class="book-button" id="${room.number}" value="${formattedDate}">Book Now</button>
    </div>
    `
  });
if (roomTypes.value === 'select') {
  displayFilteredRooms()
} else if (displayNoRoomsAvailableMessage(rooms)){
  roomsDisplay.innerHTML = `${displayNoRoomsAvailableMessage(rooms)}`
}
}

const confirmBooking = () => {
  event.target.closest('div').classList.add('booked')
  event.target.closest('div').innerHTML = `Booked!`
}

const loginCustomer = () => {
  const userID = Number(username.value.slice(8))
  customer = customerData.find((customer) => {
    return customer.id === userID
  })
  if (userID < 51 && username.value === `customer${customer.id}` && password.value === 'overlook21') {
    return true
  } else {
    alert('Wrong username or password!')
    return false
  }
}

export {displayCustomerBookings, displayTotalAmountSpent, displayCustomerName, displayFilteredRooms, displayRoomsByType, hide, show, confirmBooking, loginCustomer}