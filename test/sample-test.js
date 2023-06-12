import chai from 'chai';
const expect = chai.expect;


import { getCustomerBookings, getTotalAmountSpent, filterRoomsByDate, filterByRoomType, displayNoRoomsAvailableMessage, findCustomerById} from '../src/dataMethods';

const {mockCustomerData} = require('../src/data/mockCustomers')
const {mockRoomData} = require('../src/data/mockRooms')
const {mockBookingData} = require('../src/data/mockBookings')

describe('Get user bookings', () => {
  it('Should return all bookings for a customer sorted from newest to oldest', () => {
    
    let customer = {
      "id": 34,
      "name": "Race Osuna"
    }
    
    const customerBookings = getCustomerBookings(customer, mockBookingData)
    
    expect(customerBookings).to.deep.equal([
      {
        id: '5fwrgu4i7k55hl79x',
        userID: 34,
        date: '2023/11/28',
        roomNumber: 9
      },
      {
        id: '5fwrgu4i7k55hl6tg',
        userID: 34,
        date: '2022/02/03',
        roomNumber: 17
      }
    ]);
  });

  it('Should return all bookings for a different customer sorted from newest to oldest', () => {

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
      "name": "Otto Rocket"
      }

    const customerBookings2 = getCustomerBookings(customer, mockBookingData)

    expect(customerBookings2).to.deep.equal([])
  });
});

describe('get total amount spent', () => {
  it('Should return a customers total amount spent on rooms all time', () => {
    
    let customer = {
      "id": 9,
      "name": "Faustino Quitzon"
      } 

    const total = getTotalAmountSpent(customer, mockBookingData, mockRoomData)

    expect(total).to.equal('631.16')
  });

  it('Should return another customers total amount spent on rooms all time', () => {
    
    let customer = {
      "id": 34,
      "name": "Race Osuna"
    } 

    const total1 = getTotalAmountSpent(customer, mockBookingData, mockRoomData)

    expect(total1).to.equal('528.54')
  });

  it('Should return 0 if the customer id does not exist', () => {
    
    let customer = {
      "id": 93,
      "name": "Louis Stevens"
      }

      const total2 = getTotalAmountSpent(customer, mockBookingData, mockRoomData)

      expect(total2).to.equal('0.00')

  });
});

describe('Filter rooms by date', () => {
  it('Should return only rooms that are not booked on given date', () => {
    
    let dateValue = "2023/12/10"

    const filteredRooms = filterRoomsByDate(mockBookingData, mockRoomData, dateValue)

    expect(filteredRooms).to.deep.equal([
      {
        number: 1,
        roomType: 'residential suite',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 358.4
      },
      {
        number: 2,
        roomType: 'suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 477.38
      },
      {
        number: 3,
        roomType: 'single room',
        bidet: false,
        bedSize: 'king',
        numBeds: 1,
        costPerNight: 491.14
      },
      {
        number: 4,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 429.44
      },
      {
        number: 5,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 340.17
      },
      {
        number: 6,
        roomType: 'junior suite',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 397.02
      },
      {
        number: 7,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 231.46
      },
      {
        number: 8,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'king',
        numBeds: 1,
        costPerNight: 261.26
      },
      {
        number: 9,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 200.39
      },
      {
        number: 10,
        roomType: 'suite',
        bidet: false,
        bedSize: 'twin',
        numBeds: 1,
        costPerNight: 497.64
      },
      {
        number: 12,
        roomType: 'single room',
        bidet: false,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 172.09
      },
      {
        number: 13,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 423.92
      },
      {
        number: 14,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'twin',
        numBeds: 1,
        costPerNight: 457.88
      },
      {
        number: 15,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 294.56
      },
      {
        number: 16,
        roomType: 'single room',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 325.6
      },
      {
        number: 17,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 328.15
      },
      {
        number: 18,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'king',
        numBeds: 2,
        costPerNight: 496.41
      },
      {
        number: 19,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 374.67
      },
      {
        number: 20,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 343.95
      },
      {
        number: 21,
        roomType: 'single room',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 429.32
      },
      {
        number: 22,
        roomType: 'single room',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 350.31
      },
      {
        number: 23,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 176.36
      },
      {
        number: 24,
        roomType: 'suite',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 327.24
      },
      {
        number: 25,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 305.85
      }
    ]);
  });

  it('Should filter rooms for any given date', () => {
    
    let dateValue = "2022/02/03"

    const filteredRooms1 = filterRoomsByDate(mockBookingData, mockRoomData, dateValue)

    expect(filteredRooms1).to.deep.equal([
      {
        number: 1,
        roomType: 'residential suite',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 358.4
      },
      {
        number: 2,
        roomType: 'suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 477.38
      },
      {
        number: 3,
        roomType: 'single room',
        bidet: false,
        bedSize: 'king',
        numBeds: 1,
        costPerNight: 491.14
      },
      {
        number: 4,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 429.44
      },
      {
        number: 5,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 340.17
      },
      {
        number: 6,
        roomType: 'junior suite',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 397.02
      },
      {
        number: 7,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 231.46
      },
      {
        number: 8,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'king',
        numBeds: 1,
        costPerNight: 261.26
      },
      {
        number: 9,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 200.39
      },
      {
        number: 10,
        roomType: 'suite',
        bidet: false,
        bedSize: 'twin',
        numBeds: 1,
        costPerNight: 497.64
      },
      {
        number: 11,
        roomType: 'single room',
        bidet: true,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 207.24
      },
      {
        number: 12,
        roomType: 'single room',
        bidet: false,
        bedSize: 'twin',
        numBeds: 2,
        costPerNight: 172.09
      },
      {
        number: 13,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 423.92
      },
      {
        number: 14,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'twin',
        numBeds: 1,
        costPerNight: 457.88
      },
      {
        number: 15,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'full',
        numBeds: 1,
        costPerNight: 294.56
      },
      {
        number: 16,
        roomType: 'single room',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 325.6
      },
      {
        number: 18,
        roomType: 'junior suite',
        bidet: false,
        bedSize: 'king',
        numBeds: 2,
        costPerNight: 496.41
      },
      {
        number: 19,
        roomType: 'single room',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 374.67
      },
      {
        number: 20,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 343.95
      },
      {
        number: 21,
        roomType: 'single room',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 429.32
      },
      {
        number: 22,
        roomType: 'single room',
        bidet: false,
        bedSize: 'full',
        numBeds: 2,
        costPerNight: 350.31
      },
      {
        number: 23,
        roomType: 'residential suite',
        bidet: false,
        bedSize: 'queen',
        numBeds: 2,
        costPerNight: 176.36
      },
      {
        number: 24,
        roomType: 'suite',
        bidet: false,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 327.24
      },
      {
        number: 25,
        roomType: 'single room',
        bidet: true,
        bedSize: 'queen',
        numBeds: 1,
        costPerNight: 305.85
      }
    ]);
  });
});

describe('Filter by room type', () => {
  it('Should return rooms that match the selected room type', () => {
    
    const juniorSuites = filterByRoomType(mockRoomData, "junior suite")

    expect(juniorSuites).to.deep.equal([{
      number: 6,
      roomType: 'junior suite',
      bidet: true,
      bedSize: 'queen',
      numBeds: 1,
      costPerNight: 397.02
    },
    {
      number: 8,
      roomType: 'junior suite',
      bidet: false,
      bedSize: 'king',
      numBeds: 1,
      costPerNight: 261.26
    },
    {
      number: 17,
      roomType: 'junior suite',
      bidet: false,
      bedSize: 'twin',
      numBeds: 2,
      costPerNight: 328.15
    },
    {
      number: 18,
      roomType: 'junior suite',
      bidet: false,
      bedSize: 'king',
      numBeds: 2,
      costPerNight: 496.41
    }]);
  });

  it("should return rooms for another selected room type", () => {

    const singleRoom = filterByRoomType(mockRoomData, "single room")

    expect(singleRoom).to.deep.equal([{
      number: 3,
      roomType: 'single room',
      bidet: false,
      bedSize: 'king',
      numBeds: 1,
      costPerNight: 491.14
    },
    {
      number: 4,
      roomType: 'single room',
      bidet: false,
      bedSize: 'queen',
      numBeds: 1,
      costPerNight: 429.44
    },
    {
      number: 5,
      roomType: 'single room',
      bidet: true,
      bedSize: 'queen',
      numBeds: 2,
      costPerNight: 340.17
    },
    {
      number: 7,
      roomType: 'single room',
      bidet: false,
      bedSize: 'queen',
      numBeds: 2,
      costPerNight: 231.46
    },
    {
      number: 9,
      roomType: 'single room',
      bidet: true,
      bedSize: 'queen',
      numBeds: 1,
      costPerNight: 200.39
    },
    {
      number: 11,
      roomType: 'single room',
      bidet: true,
      bedSize: 'twin',
      numBeds: 2,
      costPerNight: 207.24
    },
    {
      number: 12,
      roomType: 'single room',
      bidet: false,
      bedSize: 'twin',
      numBeds: 2,
      costPerNight: 172.09
    },
    {
      number: 13,
      roomType: 'single room',
      bidet: false,
      bedSize: 'queen',
      numBeds: 2,
      costPerNight: 423.92
    },
    {
      number: 16,
      roomType: 'single room',
      bidet: false,
      bedSize: 'full',
      numBeds: 2,
      costPerNight: 325.6
    },
    {
      number: 19,
      roomType: 'single room',
      bidet: false,
      bedSize: 'queen',
      numBeds: 1,
      costPerNight: 374.67
    },
    {
      number: 21,
      roomType: 'single room',
      bidet: false,
      bedSize: 'full',
      numBeds: 2,
      costPerNight: 429.32
    },
    {
      number: 22,
      roomType: 'single room',
      bidet: false,
      bedSize: 'full',
      numBeds: 2,
      costPerNight: 350.31
    },
    {
      number: 25,
      roomType: 'single room',
      bidet: true,
      bedSize: 'queen',
      numBeds: 1,
      costPerNight: 305.85
    }]);
  });
});

describe('No rooms available message', () => {
  it('Should display a message if an empty array is returned', () => {

    let array = []

    const message = displayNoRoomsAvailableMessage(array)

    expect(message).to.deep.equal(`Sorry! No rooms available. Please adjust your search.`)
  })
});

describe('Find customer by id', () => {
  it('should return a customer with id equal to given id', () => {

    let user = findCustomerById(mockCustomerData, 34)

    expect(user).to.deep.equal({
      "id": 34,
      "name": "Race Osuna"
    });
  });

  it('should return another customer with id equal to given id', () => {

    let user1 = findCustomerById(mockCustomerData, 9)

    expect(user1).to.deep.equal({
      "id": 9,
      "name": "Faustino Quitzon"
    });
  });

  it('should return another customer with id equal to given id', () => {

    let user1 = findCustomerById(mockCustomerData, 9)

    expect(user1).to.deep.equal({
      "id": 9,
      "name": "Faustino Quitzon"
    });
  });
})

