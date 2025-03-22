/* 
৭. Product নামে একটা class বানা, যেখানে constructor-এর মধ্যে name: category আর stock থাকবে। তারপর নতুন একটা product বানা, যার নাম হবে Mobile, category হবে Electronics আর stock হবে 50
 */
class Product {
    constructor(name, category, stock) {
        this.name = name
        this.category = category
        this.stock = stock
    }
}
const mobile = new Product('Mobile', 'Electronics', 50)
console.log(mobile);