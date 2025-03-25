/* 
টাঙ্ক-৪: কার অ্যাকাউন্টে কত টাকা আছে, সেটা জানার জন্য checkBalance নামক একটা ফাংশন তৈরি করবি, যা ইনপুট হিসেবে নাম আর পিন নিবে। তারপর login User মেথড ইউজ করে চেক করবে, নাম আর পিন ঠিক আছে কি না। যদি ঠিক থাকে, তাহলে সেই ইউজার খুঁজে বের করে তার ব্যালেন্স রিটার্ন করে দিবে। আর যদি loginUser থেকে false রিটার্ন করে, তাহলে একটা স্ট্রিং রিটার্ন করে বলবি- তোমার অ্যাক্সেস নাই, এই অ্যাকাউন্টের ব্যালেন্স জানার।
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
        },
        checkBalance: function (name, pin) {
            if (this.loginUser(name, pin)) {
                const user = users.find(user => user.name === name);
                return user.balance;
            } else {
                return "You do not have access to view this account's balance.";
            }
        }
    }
})();

userDatabase.registerUser("Jhankar", 1234);
userDatabase.registerUser("Rakib", 5678);

userDatabase.addMoney("Jhankar", 1234, 100);
userDatabase.addMoney("Rakib", 5678, 50);

console.log(userDatabase.checkBalance("Jhankar", 1234));
console.log(userDatabase.checkBalance("Rakib", 5678));
console.log(userDatabase.checkBalance("Jhankar", 4321));
console.log(userDatabase.checkBalance("Someone", 9999)); 