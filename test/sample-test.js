import chai from 'chai';
const expect = chai.expect;


import { getCustomerBookings } from '../src/dataMethods';

const {mockCustomerData} = require('../src/data/mockCustomers')
const {mockRoomData} = require('../src/data/mockRooms')
const {mockBookingData} = require('../src/data/mockBookings')

describe('Get user bookings', () => {
  it('Should return all bookings that include the customer ID', () => {
    
    let customer = {
      "id": 34,
      "name": "Race Osuna"
    }
    
    const customerBookings = getCustomerBookings(customer, mockBookingData)
    
    expect(customerBookings).to.deep.equal([
      {
        id: '5fwrgu4i7k55hl6tg',
        userID: 34,
        date: '2022/02/03',
        roomNumber: 17
      },
      {
        id: '5fwrgu4i7k55hl79x',
        userID: 34,
        date: '2023/11/28',
        roomNumber: 9
      }
    ]);
  });

  it('Should return all bookings that include a different customer ID', () => {

    let customer = {
      "id": 9,
      "name": "Faustino Quitzon"
      }

    const customerBookings1 = getCustomerBookings(customer, mockBookingData)

    expect(customerBookings1).to.deep.equal([
      {
        id: '5fwrgu4i7k55hl7cy',
        userID: 9,
        date: '2023/12/10',
        roomNumber: 11
      },
      {
        id: '5fwrgu4i7k55hl7ux',
        userID: 9,
        date: '2022/02/07',
        roomNumber: 13
      }
    ]);
  });

  it('should return nothing if the customer ID does not exist', () => {

    let customer = {
      "id": 93,
      "name": "Hey Arnold"
      }

    const customerBookings2 = getCustomerBookings(customer, mockBookingData)

    expect(customerBookings2).to.deep.equal([])
  })
});
