/* 
৫. Library নামে একটা class বানা, যেখানে constructor-এর মধ্যে তিনটা প্রোপার্টি থাকবে name, books, আর location। তারপর নতুন একটা library বানা, যার নাম Central Library, books 10000 আর location Dhakal এরপর instance Of দিয়ে চেক কর তোর বানানো অবজেক্টটা Library ক্লাসের ইন্সট্যান্স কি না।
 */
class Library {
    constructor(name, books, location) {
        this.name = name
        this.books = books
        this.location = location
    }
}
const centralLibrary = new Library('Central Library', 10000, 'Dhaka')
console.log(centralLibrary instanceof Library);