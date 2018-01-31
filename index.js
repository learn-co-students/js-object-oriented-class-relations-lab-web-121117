let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver{

  constructor(name){
    this.id = ++driverId
    this.name = name
    // this.trips = []

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter((trip) => {
      return trip.driverId === this.id
    })
  }

  passengers(){
    return this.trips().map((trip) => {
      return trip.passenger()
    })
  }


}

let passengerId = 0
class Passenger{

  constructor(name){
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter((trip) => {
      return trip.passengerId === this.id
    })
  }

  drivers(){
    return this.trips().map((trip) => {
      return trip.driver()
    })
  }

}

let tripId = 0
class Trip{

  constructor(driver, passenger){
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id

    store.trips.push(this)
  }

  passenger(){
    return store.passengers.find((passenger)=>{
      return passenger.id === this.passengerId
    })
  }
  driver(){
    return store.drivers.find((driver)=>{
      return driver.id === this.driverId
    })
  }

}

const mark = new Driver("Mark")
const bob = new Passenger("Bob")
const trip = new Trip(mark, bob)
