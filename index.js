let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name){
    this.id= ++driverId
    this.name = name

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter((trip) => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    return this.trips().map((trip) => {
      return trip.passenger();
    })
  }

}


let passengerId = 0

class Passenger {
  constructor(name){
    this.id= ++passengerId
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
      return trip.driver();
    })
  }

}

let tripId = 0

class Trip {
  constructor(driver, passenger){
    this.id= ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id

    store.trips.push(this)
  }

  passenger(){
    return store.passengers.find((passenger) => {
      return passenger.id === this.passengerId
    })
  }

  driver(){
    return store.drivers.find((driver) => {
      return driver.id === this.driverId
    })
  }

}






// let store = {users: [], items: []}
//
// let userId = 0
//
// class User {
//
//   constructor(name){
//     this.id = ++userId
//     this.name = name
//
//     store.users.push(this)
//   }
//
//   items(){
//     return store.items.filter(item => {
//       return item.userId === this.id
//     })
//   }
//
// }
//
//
// let itemId = 0
//
// class Item {
//
//   constructor(name, price, user){
//     this.id = ++itemId
//     this.name = name
//     this.price = price
//     if(user){
//       this.userId = user.id
//     }
//     store.items.push(this)
//   }
//
//   setUser(user){
//     this.userId = user.id
//   }
//
//   user(){
//     return store.users.find(function(user){
//       return user.id === this.userId
//     })
//   }
//
// }
