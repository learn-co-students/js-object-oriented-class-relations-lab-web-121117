let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let tripId = 0;
let passengerId = 0;

class Driver {
  //has many trips
  //has many passengers through trips
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
    const relevantTrips = this.trips();
    return relevantTrips.map(trip => {
      return trip.passenger();
    });
  }
}

class Passenger {
  //has many trips
  //has many drivers through trips
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
    const relevantTrips = this.trips();
    return relevantTrips.map(trip => {
      return trip.driver();
    });
  }
}

class Trip {
  //belongs to a driver
  //belongs to a passenger
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
}
