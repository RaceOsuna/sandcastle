import {displayTotalAmountSpent, displayCustomerBookings, displayFilteredRooms} from "./domUpdates"
import { roomTypes, customer } from "./scripts";

let customerData, roomData, bookingData, today

const customersResponse = fetch('http://localhost:3001/api/v1/customers')
.then(response => response.json((response) => {
  if(!response.ok) {
    throw new Error(`${response.status}`)
  } else {
    return response.json();
  }
}))
.catch(error => alert(`${error.message}`));


const bookingsResponse = fetch('http://localhost:3001/api/v1/bookings')
.then(response => response.json((response) => {
  if(!response.ok) {
    throw new Error(`${response.status}`)
  } else {
    return response.json();
  }
}))
.catch(error => alert(`${error.message}`));


const roomsResponse = fetch('http://localhost:3001/api/v1/rooms')
.then(response => response.json((response) => {
  if(!response.ok) {
    throw new Error(`${response.status}`)
  } else {
    return response.json();
  }
}))
.catch(error => alert(`${error.message}`));


window.addEventListener('load', () => {
Promise.all([customersResponse, bookingsResponse, roomsResponse]).then(([customers, bookings, rooms]) => {
  
  customerData = customers.customers
  bookingData = bookings.bookings
  roomData = rooms.rooms
  
  today = new Date().toISOString().split('T')[0]
  const calander = document.getElementById('calander')
  calander.setAttribute('min', today)
  });
});

const bookRoom = (date, num) => {
  fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify({ "userID": customer.id, "date": date, "roomNumber": num}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    if(!response.ok) {
      throw new Error(`${response.status}`)
    } else {
      return response.json();
    }
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => alert(`${error.message}`));
};

const getUpdatedBookings = () => {
  fetch('http://localhost:3001/api/v1/bookings')
  .then(response => response.json((response) => {
    if(!response.ok) {
      throw new Error(`${response.status}`)
    } else {
      return response.json();
    }
  }))
  .then((response) => {
    console.log(response.bookings)
    bookingData = response.bookings
    roomTypes.value = 'select'
    displayCustomerBookings()
    displayFilteredRooms()
    displayTotalAmountSpent()
  })
  .catch(error => alert(`${error.message}`));
}


export {
  customerData,
  bookingData,
  roomData,
  bookRoom,
  getUpdatedBookings,
  today
}