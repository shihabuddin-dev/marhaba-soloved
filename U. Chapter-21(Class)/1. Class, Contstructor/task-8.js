/* 
৮. Product নামে একটা class বানা, যেখানে constructor-এর মধ্যে name, category আর stock থাকবে। তারপর নতুন একটা product বানা, যার নাম হবে Mobile, category হবে Electronics আর stock হবে 50। যদি অবজেক্ট বানানোর সময় কেউ stock প্রোপার্টির মান না দেয়, তাহলে stock-এর ডিফল্ট মান 0 দিয়ে দিবি 
*/
class Product {
    constructor(name, category, stock = 0) {
        this.name = name
        this.category = category
        this.stock = stock
    }
}
const mobile = new Product('Mobile', 'Electronics', 20)
console.log(mobile);