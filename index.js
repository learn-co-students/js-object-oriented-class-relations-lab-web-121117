let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    });
  }

  passengers() {
    // mapping all trip instances the driver has made...
    return this.trips().map(trip => {
      // and all trip instances have access to Trip's passenger() method which will return passengers for each trip
      return trip.passenger();
    });
  }
}

let passengerId = 0;
class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    });
  }

  drivers() {
    // use trips() to map all trip instances the passenger has taken...
    return this.trips().map(trip => {
      // return all of the drivers from each trips
      return trip.driver();
    });
  }
}

let tripId = 0;
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}

// let bob = new Driver("Bob");
// let tom = new Passenger("Tom");
// let trip1 = new Trip(bob, tom);
// let trip2 = new Trip(tom, bob);
// let trip3 = new Trip(bob, tom);
