
let store = {drivers:[], trips:[], passengers:[]}
let driverId = 0
let passengerId = 0
let tripId = 0


class Driver{
  constructor(name){
    this.id = driverId++
    this.name = name

    store.drivers.push(this)
  }

  trips(){
    let tripsArray = []
      for(let element of store.trips){
        if (element.driverId === this.id){
            tripsArray.push(element)
        }
      }
    return tripsArray
  }
  passengers(){
    let passengersArray = []
    let returnArray = []
    for (let element of store.trips){
      if (element.driverId === this.id){
        passengersArray.push(element.passengerId)
      }
    }
    for(let element of store.passengers){
      if(passengersArray.includes(element.id)){
        returnArray.push(element)
      }
    }
    return returnArray
  }
}

class Passenger{
  constructor(name){
    this.id = passengerId++
    this.name = name
    store.passengers.push(this)
  }
  trips(){
    let tripsArray = []
      for(let element of store.trips){
        if (element.passengerId === this.id){
            tripsArray.push(element)
        }
      }
    return tripsArray
  }
  drivers(){
    let driversArray = []
    let returnArray = []
    for (let element of store.trips){
      if (element.passengerId === this.id){
        driversArray.push(element.driverId)
      }
    }
    for(let element of store.drivers){
      if(driversArray.includes(element.id)){
        returnArray.push(element)
      }
    }
    return returnArray
  }
}

class Trip{
  constructor(driver,passenger){
    this.id = tripId++
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }
  driver(){
    for (let element of store.drivers){
      if (element.id === this.driverId){
        return element
      }
    }
  }
  passenger(){
    for (let element of store.passengers){
      if(element.id === this.passengerId){
        return element
      }
    }
  }
}
