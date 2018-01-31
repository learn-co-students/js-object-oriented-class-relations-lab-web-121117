let driverId = 0;
let passengerId = 0;
let tripId = 0;

let store = {
  drivers: [],
  passengers: [],
  trips: []
}

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverId

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers(){
    let passengerIds =  store.trips.map(trip => {
      return trip.passengerId
    })
    return store.passengers.filter(passenger => {
      if(passengerIds.includes(passenger.id)){
        return passenger
      }
    })
  }
}

class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers(){
    let driverIds = store.drivers.map(driver => {
      return driver.id
    })

    return store.drivers.filter(driver => {
      if(driverIds.includes(driver.id)){
        return driver
      }
    })
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this)
  }

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }

  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }
}
