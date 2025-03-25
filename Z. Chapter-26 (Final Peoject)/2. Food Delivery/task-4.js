/* 
টাস্ক-৪: কোনো একটা অর্ডার আইডি আর রেস্টুরেন্টের নাম দিয়ে কেউ রিভিউ সাবমিট করতে পারবে। এই ফাংশনের নাম দিবি subenitReview, আর এইটার চারটা প্যারামিটার থাকবে। প্রথমে থাকবে অর্ডার আইডি, রেস্টুরেন্টের নাম। তারপর রেটিংস (0 থেকে 5-এর মধ্যে কোনো সংখ্যা), তারপর থাকবে রিভিউর স্ট্রিং। 
submit Review-এর মধ্যে প্রথমেই চেক করবি, যে অর্ডার আইডি আর রেস্টুরেন্টের নাম দিছে, সেটা ঠিক আছে কি না। অর্থাৎ অর্ডার আইডি আর রেস্টুরেন্ট নাম দুইটাই ম্যাচ করে, এমন কোনো অর্ডার আছে কি না। যদি থাকে, তাহলে বাকি কাজ করবি। আর যদি না থাকে, তাহলে বলবি- না খেয়ে ভুয়া রিভিউ দিবেন না, প্লিজ আর অর্ডার ভ্যালিড হলে চেক করবি, রেটিংসের সংখ্যা 0 থেকে 5-এর মধ্যে কি না। যদি 5-এর বেশি হয় বা ০-এর কম হয়, তাহলে এরর দিবি- রেটিংস ০ থেকে 5-এর মধ্যে হতে হবে। এরপর চেক করবে, রিভিউর মধ্যে মিনিমাম 20 ক্যারেক্টার বা তার চেয়ে বড় রিভিউ লিখে দিছে কি না। যদি রিভিউর লেংথ কম হয়, তাহলে এরর ম্যাসেজ দিয়ে বলবি, রিভিউ 20 ক্যারেক্টারের চাইতে বড় হতে হবে। আর যদি রিভিউ ঠিক থাকে তাহলে, একটা রিভিউ অবজেক্ট বানিয়ে সেটা reviews নামক অ্যারেতে যোগ করে দিবি। প্রত্যেকটা রিভিউর একটা id থাকবে, অন্যান্য ডাটা থাকবে। রিটার্ন হিসেবে: রিভিউ ঠিকমতো যোগ হয়েছে এবং এইটা তোমার রিভিউ আইডি
*/

let orders = [
    { id: 1, restaurantName: 'Jhankar Restaurant', price: 500, status: 'Completed' },
    { id: 2, restaurantName: 'Hanki-Panki Restaurant', price: 150, status: 'Completed' },
    { id: 3, restaurantName: 'Hanki-Panki Restaurant 2', price: 300, status: 'Completed' }
];

let reviews = [];
const submitReview = (orderId, restaurantName, rating, reviewText) => {
    const order = orders.find(order => order.id === orderId && order.restaurantName === restaurantName);

    if (!order) {
        return "না খেয়ে ভুয়া রিভিউ দিবেন না, প্লিজ!";
    }

    if (rating < 0 || rating > 5) {
        return "রেটিংস ০ থেকে ৫-এর মধ্যে হতে হবে!";
    }

    if (reviewText.length < 20) {
        return "রিভিউ ২০ ক্যারেক্টারের চাইতে বড় হতে হবে!";
    }

    const review = {
        id: reviews.length + 1,
        orderId,
        restaurantName,
        rating,
        reviewText
    };
    reviews.push(review);
    return `রিভিউ ঠিকমতো যোগ হয়েছে। রিভিউ আইডি: ${review.id}`;
};

console.log(submitReview(1, 'Jhankar Restaurant', 4, "খাবারটা ভালো ছিল, পরিবেশনও সঠিক ছিল।"));
console.log(submitReview(1, 'Jhankar Restaurant', 6, "খাবারটা ভালো ছিল।"));
console.log(submitReview(2, 'Hanki-Panki Restaurant', 3, "খাবারটা বেশ ভালো ছিল কিন্তু একটু তিক্ত ছিল।"));
console.log(submitReview(4, 'New Restaurant', 5, "খাবারটি অসাধারণ!"));
console.log(submitReview(2, 'Hanki-Panki Restaurant', 4, "ভালো।")); 
