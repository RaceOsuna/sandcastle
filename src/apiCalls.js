import { displayCustomerName, displayTotalAmountSpent, displayCustomerBookings } from "./domUpdates"


let customer, customerData, roomData, bookingData

const customersResponse = fetch('http://localhost:3001/api/v1/customers')
.then(response => response.json((response) => {
  if(!response.ok) {
    throw new Error(`${response.status}`)
  } else {
    return response.json();
  }
}))


const bookingsResponse = fetch('http://localhost:3001/api/v1/bookings')
.then(response => response.json((response) => {
  if(!response.ok) {
    throw new Error(`${response.status}`)
  } else {
    return response.json();
  }
}))


const roomsResponse = fetch('http://localhost:3001/api/v1/rooms')
.then(response => response.json((response) => {
  if(!response.ok) {
    throw new Error(`${response.status}`)
  } else {
    return response.json();
  }
}))


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


  displayCustomerName()
  displayCustomerBookings()
  displayTotalAmountSpent()
  })

  console.log(roomData)
  return customer;
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
  .then(data => console.log("hello"))
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
    displayCustomerBookings()
  })
  .catch(error => console.log(error.message))
}

  const log = () => {console.log(customer)}
  setTimeout(log, 4000)


export {
  customer,
  customerData,
  bookingData,
  roomData,
  bookRoom,
  getUpdatedBookings
}