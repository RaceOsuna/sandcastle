import { getCustomerBookings, getTotalAmountSpent, filterRoomsByDate, filterByRoomType, displayNoRoomsAvailableMessage } from "./dataMethods";
import { customer, customerData, bookingData, roomData } from "./apiCalls";
import { selectedDate, roomsDisplay, roomTypes } from "./scripts";

let allAvailableRooms = []

const today = new Date().toISOString().split('T')[0].replaceAll('-', '/')
const calander = document.getElementById('calander')
calander.setAttribute('min', today)

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
  const bookingsSection = document.querySelector('.bkngs')
  bookings.forEach((booking) => {
    bookingsSection.innerHTML +=
    `
    <div>
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

// const displayNoRoomsAvailableMessage = (arr) => {
//   if (!arr.length) {
//     roomsDisplay.innerHTML = `Sorry! No rooms available. Please adjust your search.`
//   }
// }

const displayFilteredRooms = () => {
  allAvailableRooms = []
  roomsDisplay.innerHTML = ''
  const formattedDate = selectedDate.value.replaceAll('-', '/')
  const availableRooms = filterRoomsByDate(bookingData, roomData, formattedDate)
  availableRooms.forEach((room) => {
    allAvailableRooms.push(room)
    roomsDisplay.innerHTML += 
    `
    <div class="room">
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
    <div class="room">
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

export {displayCustomerBookings, displayTotalAmountSpent, displayCustomerName, displayFilteredRooms, displayRoomsByType, hide, show}