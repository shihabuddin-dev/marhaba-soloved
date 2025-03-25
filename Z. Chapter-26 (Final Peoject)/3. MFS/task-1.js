/* 
টাস্ক-১: তোর এখন একটা কাজ হচ্ছে, registerUser-এর ভিতরে কিছু সিম্পল ভ্যালিডেশন করে ফেলা। যদি name এবং pin- এই দুইটার মান না দেয়া থাকে, তাহলে তুই error রিটার্ন করবি। আবার pin যদি সংখ্যা না হয় বা চার ডিজিটের সংখ্যা না হয়, তাহলে তুই error রিটার্ন করবি। আর এই দুইটা ঠিক থাকলে তুই একটা অবজেক্ট বানিয়ে ফেলবি, যেখানে অবজেক্টের আইডি থাকবে। আইডির মান হবে ওপরের users-এর মধ্যে যতগুলো উপাদান আছে, তার সংখ্যার সাথে 1 যোগ করে। এর পাশাপাশি name, pin এবং balance যোগ করে দিবি। balance-এর প্রাথমিক মান হবে 0 আর ঠিকমতো ইউজার যোগ করতে পারলে true রিটার্ন করে দিবি।
 */

const userDatabase = (function () {
    const users = [];
    return {
        registerUser: function (name, pin) {
            if (!name || !pin) {
                return "Error: Name and pin are required.";
            }
            if (isNaN(pin) || pin.length !== 4) {
                return "Error: Pin must be a 4 digit number.";
            }

            const newUser = {
                id: users.length + 1,
                name,
                pin,
                balance: 0
            };
            users.push(newUser);
            return true;
        }
    }
})();

console.log(userDatabase.registerUser("Shihab", "1234"));
console.log(userDatabase.registerUser("", "1234")); 