let user, rooms, bookings

const customers = fetch('http://localhost:3001/api/v1/customers')
.then(response => response.json())
.then(response => console.log(response))

const customerBookings = fetch('http://localhost:3001/api/v1/bookings')
.then(response => response.json())
.then(response => console.log(response))

const hotelRooms = fetch('http://localhost:3001/api/v1/rooms')
.then(response => response.json())
.then(response => console.log(response))


export {
  customers,
  customerBookings,
  hotelRooms
}