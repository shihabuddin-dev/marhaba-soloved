/* 
১. হোটেলের জন্য একটা ক্লাস বানিয়ে ফেল। যেখানে হোটেলের নাম, রুমসংখ্যা এবং রাতে থাকার খরচ থাকবে। তারপর getName মেথডকে কল করলে হোটেলের নাম রিটার্ন করবে।
 */
class Hotel {
    constructor(name, room, livingCost) {
        this.name = name
        this.room = room
        this.livingCost = livingCost
    }
    getName() {
        return this.name
    }
}
const arealHotel = new Hotel('Akboria', 201, 2000)
console.log(arealHotel.getName());