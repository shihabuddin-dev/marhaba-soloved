/* 
৩. Vehicle নামে একটা class লিখ, সেখানে constructor-এর মধ্যে brand, model এবং price প্রোপার্টি রাখ। Vehicle ক্লাস থেকে দুইটা instance বানা, একটা BMW X5, যেখানে ব্র্যান্ড BMW, মডেল X5 আর price তুই তোর ইচ্ছামতো কোনো একটা দাম বসিয়ে দে। আরেকটা গাড়ির জন্য ব্র্যান্ড Tesla, মডেল Model 3 আর price 40000।
 */
class Vehicle {
    constructor(brand, model, price) {
        this.brand = brand
        this.model = model
        this.price = price
    }
}

const bmwX5 = new Vehicle('MBW', 'X5', 20000000)
const teslaModel3 = new Vehicle('Tesla', 'Model 3', 40000)
console.log(bmwX5, teslaModel3);