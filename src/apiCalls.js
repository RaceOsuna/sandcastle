//let customer, customerData, roomData, bookingData

const customersResponse = fetch('http://localhost:3001/api/v1/customers')
.then(response => response.json())
//.then(response => console.log(response))

const bookingsResponse = fetch('http://localhost:3001/api/v1/bookings')
.then(response => response.json())
//.then(response => console.log(response))

const roomsResponse = fetch('http://localhost:3001/api/v1/rooms')
.then(response => response.json())
//.then(response => console.log(response))

// window.addEventListener('load', () => {
//   Promise.all([customersResponse, bookingsResponse, roomsResponse]).then(([customers, bookings, rooms]) => {
  
//   customerData = customers.customers
//   bookingData = bookings.bookings
//   roomData = rooms.rooms
  
//   const selectRandomUser = (data) => {
//     const index = Math.floor(Math.random() * data.length - 1);
//     const aUser = data[index];
//     return aUser;
//   }

//   customer = selectRandomUser(customerData);

//   return customer;
//   })});


export {
  // customerData,
  // bookingData,
  // roomData
  customersResponse,
  bookingsResponse,
  roomsResponse
}