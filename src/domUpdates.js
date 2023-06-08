import { getCustomerBookings, getTotalAmountSpent, filterRoomsByDate } from "./dataMethods";
import { customer, customerData, bookingData, roomData } from "./apiCalls";
import { selectedDate } from "./scripts";

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

const displayFilteredRooms = () => {
  const formattedDate = selectedDate.value.replaceAll('-', '/')
  const availableRooms = filterRoomsByDate(bookingData, roomData, formattedDate)
  console.log(availableRooms)
  return availableRooms
}


export {displayCustomerBookings, displayTotalAmountSpent, displayCustomerName, displayFilteredRooms}