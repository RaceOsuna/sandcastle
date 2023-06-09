import { getCustomerBookings, getTotalAmountSpent, filterRoomsByDate, filterByRoomType } from "./dataMethods";
import { customer, customerData, bookingData, roomData } from "./apiCalls";
import { selectedDate, roomsDisplay, roomTypes } from "./scripts";

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
  const bookingsSection = document.querySelector('.bkngs')
  bookings.forEach((booking) => {
    bookingsSection.innerHTML +=
    `
    <div>
      <p>Date: ${booking.date}</p>
      <p>Room Number: ${booking.roomNumber}</p>
      <img src="https://www.hotelkiaora.com/wp-content/uploads/2016/11/Beach-Bungalow-5-1024x683.jpg" alt="">
    </div>
    `
  })
}

const displayTotalAmountSpent = () => {
  const total = getTotalAmountSpent(customer, bookingData, roomData)
  const dollars = document.querySelector('.dollars')
  dollars.innerText = `ATM: $${total}`
}

const displayAllRooms = () => {
  roomsDisplay.innerHTML = ''
  roomData.forEach((room) => {
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
    </div>
    `
  })
}

const displayFilteredRooms = () => {
  allAvailableRooms = []
  roomsDisplay.innerHTML = ''
  const formattedDate = selectedDate.value.replaceAll('-', '/')
  const availableRooms = filterRoomsByDate(bookingData, roomData, formattedDate)
  availableRooms.forEach((room) => {
    allAvailableRooms.push(room)
    roomsDisplay.innerHTML += 
    `
    <div class="room" id="${room.number}" value="${formattedDate}">
      <p>Room Number: ${room.number}</p>
      <p>Room Type: ${room.roomType}</p>
      <p>Bidet: ${room.bidet}</p>
      <p>Bed Size: ${room.bedSize}</p>
      <p>Beds: ${room.numBeds}</p>
      <p>Nightly Rate: ${room.costPerNight}</p>
    </div>
    `
  })
}

const displayRoomsByType = () => {
  roomsDisplay.innerHTML = ''
  const rooms = filterByRoomType(allAvailableRooms, roomTypes.value)
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
    </div>
    `
  });
if (roomTypes.value === 'select') {
  displayFilteredRooms()
}
}

export {displayCustomerBookings, displayTotalAmountSpent, displayCustomerName, displayFilteredRooms, displayRoomsByType, hide, show, displayAllRooms}