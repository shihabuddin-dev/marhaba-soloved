/* 
৩. বেশ কয়েক রকমের যানবাহনের কথা চিন্তা কর। Bus, Truck আর Bike প্রথমে এদের জন্য তোর ইচ্ছামতো (চিন্তা করে করে) মিনিমাম 5 টা করে প্রোপার্টি যোগ কর। তারপর দেখ, কোন কোন প্রোপার্টি কমন, আর কোন কোন প্রোপার্টি আনকমন। তারপর কমন প্রোপার্টিগুলো নিয়ে একটা প্যারেন্ট ক্লাস বানিয়ে ফেল। এরপর প্যারেন্ট ক্লাসকে extends করে চাইল্ড ক্লাসের সাথে রিলেশন বিল্ড কর। তারপর সবগুলো চাইল্ড ক্লাস থেকে অবজেক্ট বানিয়ে চেক করে দেখ, কমন এবং আনকমন সব ধরনের প্রোপার্টি পাচ্ছস কি না। 
*/

class Vehicle {
    constructor(brand, model, price, color, engineType) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.color = color;
        this.engineType = engineType;
    }
    vehicleDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}, Color: ${this.color}, Engine: ${this.engineType}`);
    }
}

class Bus extends Vehicle {
    constructor(brand, model, price, color, engineType, seats, routeNumber, isAC) {
        super(brand, model, price, color, engineType);
        this.seats = seats;
        this.routeNumber = routeNumber;
        this.isAC = isAC;
    }
    busDetails() {
        console.log(`This Bus - Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}, Color: ${this.color}, Engine: ${this.engineType}, Seats: ${this.seats}, Route: ${this.routeNumber}, AC: ${this.isAC}`);
    }
}

class Truck extends Vehicle {
    constructor(brand, model, price, color, engineType, loadCapacity, numberOfWheels, hasTrailer) {
        super(brand, model, price, color, engineType);
        this.loadCapacity = loadCapacity;
        this.numberOfWheels = numberOfWheels;
        this.hasTrailer = hasTrailer;
    }
    truckDetails() {
        console.log(`This Truck - Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}, Color: ${this.color}, Engine: ${this.engineType}, Capacity: ${this.loadCapacity}, Wheels: ${this.numberOfWheels}, Trailer: ${this.hasTrailer}`);
    }
}

class Bike extends Vehicle {
    constructor(brand, model, price, color, engineType, fuelType, engineCC, isElectric) {
        super(brand, model, price, color, engineType);
        this.fuelType = fuelType;
        this.engineCC = engineCC;
        this.isElectric = isElectric;
    }
    bikeDetails() {
        console.log(`This Bike - Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}, Color: ${this.color}, Engine: ${this.engineType}, Fuel: ${this.fuelType}, CC: ${this.engineCC}, Electric: ${this.isElectric}`);
    }
}

const bus = new Bus('Hanif', 'Volvo', 500000, 'Green', 'Diesel', 48, 'Dhaka-CTG', true);
bus.vehicleDetails();
bus.busDetails();

const truck = new Truck('Toyota', 'Hilux', 700000, 'Yellow', 'Diesel', '10 Ton', 6, true);
truck.vehicleDetails();
truck.truckDetails();

const bike = new Bike('Honda', 'CBR', 200000, 'Black', 'Petrol', 'Octane', '150cc', false);
bike.vehicleDetails();
bike.bikeDetails();