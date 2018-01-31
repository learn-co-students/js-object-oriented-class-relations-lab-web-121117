let store = { drivers: [], passengers: [], trips: [] };
let userId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = userId;
    this.name = name;
    store.drivers.push(this);
    userId++;
  }

  trips() {
    return store.trips.filter(object => {
      return object.driverId === this.id;
    });
  }

  passengers() {
    let trips = this.trips();
    trips = trips.map(object => object.passengerId);

    return store.passengers.filter(object => {
      return trips.includes(object.id);
    });
  }
}

class Passenger {
  constructor(name) {
    this.id = passengerId;
    this.name = name;
    store.passengers.push(this);
    passengerId++;
  }

  trips() {
    return store.trips.filter(object => {
      return object.passengerId === this.id;
    });
  }

  drivers() {
    let trips = this.trips();
    trips = trips.map(object => object.driverId);

    return store.drivers.filter(object => {
      return trips.includes(object.id);
    });
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
  passenger() {
    return store.passengers.find(object => {
      return object.id === this.passengerId;
    });
  }

  driver() {
    return store.drivers.find(object => {
      return object.id === this.driverId;
    });
  }
}
