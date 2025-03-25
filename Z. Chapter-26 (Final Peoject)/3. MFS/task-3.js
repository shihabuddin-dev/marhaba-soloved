/* 
টাঙ্ক-৩: শুরুতে কিন্তু ব্যালেন্স ছিল 0 তাই এইবার অ্যাকাউন্টে টাকা যোগ করার কাজ। জাস্ট আগের মতো loginUser-এর পর কমা দিয়ে addMoney মেথড লিখবি। এইটা তিনটা প্যারামিটার নিবে: নাম, পিন, এমাউন্ট (অর্থাৎ কত টাকা যোগ করতে চাস)। এই মেথড থেকে নাম আর পিন দিয়ে login User মেথডকে কল করবি। যদি loginUser থেকে true রিটার্ন পায়, তাহলে users থেকে এই ইউজার খুঁজে বের করে তার বর্তমান ব্যালেন্সে এমাউন্ট প্যারামিটারের টাকা যোগ করে দিবি এবং একটা স্ট্রিং রিটার্ন করবি, যেখানে বলা থাকবে, কার অ্যাকাউন্টে কত টাকা যোগ করা হইছে এবং তার বর্তমান ব্যালেন্স কত। আর যদি loginUser থেকে false রিটার্ন করে, তাহলে আরেকটা স্ট্রিং রিটার্ন করবি. যেখানে বলা থাকবে, সরি, টাকা অ্যাকাউন্টে যোগ করতে পারি নাই। তোমার টাকা রিফান্ড করা হইছে।
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
        },
        addMoney: function (name, pin, amount) {
            if (this.loginUser(name, pin)) {
                const user = users.find(user => user.name === name);
                user.balance += amount;

                return `Successfully added ${amount} to ${name}'s account. Current balance: ${user.balance}`;
            } else {
                return "Sorry, could not add money to the account. Your money has been refunded.";
            }
        }
    }
})();

userDatabase.registerUser("Jhankar", 1234);
userDatabase.registerUser("Rakib", 5678);

console.log(userDatabase.addMoney("Jhankar", 1234, 100));
console.log(userDatabase.addMoney("Rakib", 5678, 50));
console.log(userDatabase.addMoney("Jhankar", 1111, 20));
console.log(userDatabase.addMoney("Someone", 9999, 100));