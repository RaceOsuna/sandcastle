const getCustomerBookings = (customer, bookingData) => {
  return bookingData.filter((booking) => booking.userID === customer.id)
}

const getTotalAmountSpent = (customer, bookingData, roomData) => {
  const totalSpent = bookingData.filter((booking) => booking.userID === customer.id)
    .reduce((acc, booking) => {
      roomData.forEach((room) => {
        if (booking.roomNumber === room.number) {
          acc += room.costPerNight
        }
      })
      return acc
    }, 0)
    return totalSpent.toFixed(2)
}

const filterRoomsByDate = (bookingData, roomData, date) => {
  const booked = bookingData.filter((booking) => booking.date === date).map((index) => index.roomNumber)
  return roomData.filter((room) => !booked.includes(room.number))
}


const filterByRoomType = (roomData, type) => {
  return roomData.filter(room => room.roomType === type)
}

export {getCustomerBookings, getTotalAmountSpent, filterRoomsByDate, filterByRoomType}