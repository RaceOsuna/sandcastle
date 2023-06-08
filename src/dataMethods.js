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

const filterRoomsByDate = (date, rooms, bookings) => {
  return rooms.reduce((acc, room) => {
    bookings.forEach((booking) => {
      if (!booking.date.includes(date) && booking.roomNumber === room.number && !acc.includes(room)) {
        acc.push(room)
      }
    })
    return acc
  }, [])
}

export {getCustomerBookings, getTotalAmountSpent, filterRoomsByDate}