/*
টাস্ক-২: লগইন সিস্টেম তৈরি করা, যেখানে registerUser-এর ফাংশন লিখছিস, সেখানে খেয়াল করে register User যেখানে শেষ হইছে, সেখানে কমা দিয়ে আরেকটা মেথড লিখে ফেল। এইটার নাম হবে login User। এইখানেও দুইটা প্যারামিটার নিবি। নাম আর চার ডিজিটের ফোন নাম্বার। তারপর ওপরের users নামক অ্যারেতে গিয়ে সেই user খুঁজে বের করে দেখবি, যে পিন দিছে, সেটা users থেকে যে ইউজার খুঁজে পাইছস, তার পিনের সাথে ম্যাচ করে কি না। যদি ম্যাচ খায়, তাহলে true রিটার্ন করবি। না হয় false রিটার্ন করবি।
এইবার তোর বানানো registerUser আর login User টেস্ট করে ফেল।
টেস্ট করার জন্য userDatabase লিখে ডট চিহ্ন দিয়ে registerUser লিখবি। এইটাকে ফাংশনের মতো করে কল করে দিবি। যে যে প্যারামিটার দরকার সেগুলো দিয়ে। একইভাবে userDatabase.loginUser-কে কল করে দিবি প্রয়োজনীয় প্যারামিটার দিয়ে।
জাস্ট কয়েকটা নাম আর পিন দিয়ে ইউজার বানিয়ে ফেল। তারপর আবার login User-কে কল করে কয়েকবার ঠিক নাম আর পিন দিবি, আবার কয়েকবার নাম বা পিন ভুল দিবি। দেখ, ঠিক দিলে true, আর ভুল দিলে false রিটার্ন করে কি না।
*/

const userDatabase = (function () {
    const users = [];

    return {
        registerUser: function (name, pin) {
            if (!name || !pin) {
                return "Error: Name and PIN are required.";
            }

            if (typeof pin !== 'number' || pin.toString().length !== 4) {
                return "Error: PIN must be a 4-digit number.";
            }

            const newUser = {
                id: users.length + 1,
                name: name,
                pin: pin,
                balance: 0
            };

            users.push(newUser);
            return true;
        },

        loginUser: function (name, pin) {

            const user = users.find(user => user.name === name);

            if (!user) {
                return false;
            }
            if (user.pin === pin) {
                return true;
            } else {
                return false;
            }
        }
    }
})();

userDatabase.registerUser("Alice", 1234);
userDatabase.registerUser("Bob", 5678);
userDatabase.registerUser("Charlie", 9012);

console.log(userDatabase.loginUser("Alice", 1234));
console.log(userDatabase.loginUser("Bob", 5678));
console.log(userDatabase.loginUser("Charlie", 9012));

console.log(userDatabase.loginUser("Alice", 4321));
console.log(userDatabase.loginUser("David", 1234));
console.log(userDatabase.loginUser("Bob", "5678")); 