/* 
টাস্ক-৫: টাকা পাঠানোর জন sendMoney মেথড লিখে ফেল। এইটা চারটা প্যারামিটার নিবে। প্রথমে যে টাকা পাঠাবে, তার নাম তার পিন। তারপর যাকে টাকা পাঠাবে, তার নাম এবং কত টাকা পাঠাবে
এই মেথডের ভিতরে প্রথমে login User মেথড ইউজ করে চেক করবি, যে টাকা পাঠাচ্ছে, তার নাম এবং পিন ঠিক আছে কি না। যদি সেন্ডারের নাম আর পিন ঠিক না থাকে, তাহলে একটা এরর ম্যাসেজ দিবি, তোমার টাকা পাঠানোর অ্যাক্সেস নাই।
আর যদি নাম আর পিন ঠিক থাকে, তাহলে সেই ইউজারকে খুঁজে বের করে চেক করবি, সে যত টাকা পাঠাতে চায়, তার সমান বা বেশি পরিমাণ টাকা তার ব্যালান্সে আছে কি না। যদি কম থাকে, তাহলে একটা এরর ম্যাসেজ দিবি, তোমার অ্যাকাউন্টে যথেষ্ট টাকা নাই।
যদি যথেষ্ট টাকা থাকে, তাহলে যাকে টাকা পাঠাতে চায়, তার নাম দিয়ে তাকে users থেকে খুঁজে বের করার চেষ্টা করবি। যদি সেই নাম দিয়ে কাউকে খুঁজে না পায়, তাহলে একটা এরর ম্যাসেজ দিবে, টাকা রিসিভারকে পাওয়া যায় নাই।
যদি রিসিভারকে পাওয়া যায়, তাহলে যে সেন্ডার তার ব্যালেন্স থেকে যে এমাউন্ট সেন্ড করতে চাচ্ছে, সেটা কমিয়ে তার ব্যালেন্স প্রথমে আপডেট করবি। তারপর যে রিসিভার, তার ব্যালেন্সে সেই এমাউন্ট যোগ করে রিসিভারের ব্যালেন্স আপডেট করবি।
সব ঠিক হলে সবার শেষে একটা ম্যাসেজ পাঠাবি। টাকা ভালোভাবে সেন্ড করে দিয়েছি।
*/

const users = [
    { name: 'Jhankar', pin: 1234, balance: 1000 },
    { name: 'Rakib', pin: 5678, balance: 2000 },
    { name: 'Gias', pin: 9012, balance: 1500 }
];

const loginUser = (name, pin) => {
    const user = users.find(user => user.name === name && user.pin === pin);
    return user ? true : false;
};

const sendMoney = (senderName, senderPin, receiverName, amount) => {
    if (!loginUser(senderName, senderPin)) {
        return "তোমার টাকা পাঠানোর অ্যাক্সেস নাই।";
    }

    const sender = users.find(user => user.name === senderName);
    if (sender.balance < amount) {
        return "তোমার অ্যাকাউন্টে যথেষ্ট টাকা নাই।";
    }

    const receiver = users.find(user => user.name === receiverName);
    if (!receiver) {
        return "টাকা রিসিভারকে পাওয়া যায় নাই।";
    }

    sender.balance -= amount;
    receiver.balance += amount;
    return "টাকা ভালোভাবে সেন্ড করা হয়েছে।";
};

console.log(sendMoney('Jhankar', 1234, 'Rakib', 500));
console.log(sendMoney('Jhankar', 1234, 'Gias', 1500));
console.log(sendMoney('Rakib', 4321, 'Gias', 500));
console.log(sendMoney('Jhankar', 1234, 'Jamal', 500));

console.log(users);