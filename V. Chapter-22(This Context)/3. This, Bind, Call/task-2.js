/* 
২. একটা car অবজেক্ট বানা, যার মধ্যে speed এবং price থাকবে। এরপর একটা মেথড drive বানা, যেখানে this.speed এবং this.price দিয়ে গাড়ির তথ্য কনসোল লগ করবে। এখন car অবজেক্টের drive ইউজ করবি.call() ব্যবহার করে। তবে this-এর মান হিসেবে একবার bike নামের একটা অবজেক্ট দিয়ে দিবি। আবার truck নামের আরেকটা অবজেক্ট দিয়ে দিবি। আর bike এবং truck এই দুই অবজেক্টই speed আর price প্রোপার্টি থাকবে।
 */

const car = {
    speed: 120,
    price: 25000,
    drive: function () {
        console.log(`Car speed: ${this.speed} km/h, Price: $${this.price}`);
    }
};

const bike = {
    speed: 80,
    price: 5000
};

const truck = {
    speed: 90,
    price: 40000
};

car.drive.call(bike);
car.drive.call(truck);


