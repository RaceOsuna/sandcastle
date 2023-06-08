import { displayCustomerName, displayTotalAmountSpent, displayCustomerBookings } from "./domUpdates"

let customer, customerData, roomData, bookingData

const customersResponse = fetch('http://localhost:3001/api/v1/customers')
.then(response => response.json())


const bookingsResponse = fetch('http://localhost:3001/api/v1/bookings')
.then(response => response.json())


const roomsResponse = fetch('http://localhost:3001/api/v1/rooms')
.then(response => response.json())


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

  return customer;
  });
});

  const log = () => {console.log(customer)}
  setTimeout(log, 4000)


export {
  customer,
  customerData,
  bookingData,
  roomData
}