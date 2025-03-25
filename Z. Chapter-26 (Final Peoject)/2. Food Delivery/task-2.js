/* 
টাঙ্ক-২: এইবার placeOrder নামে একটা ফাংশন লিখ। এইটার চারটা প্যারামিটার থাকবে customer, restaurantName, foodItem, discountCode! প্রথমেই getFoodPrice ফাংশনকে রেস্টুরেন্টের নাম আর খাবারের নাম দিয়ে খাবারের দাম জানার চেষ্টা করবি। যদি খাবারের দাম হিসেবে একটা সংখ্যা আসে, তাহলে এইটা ইউজ করে অর্ডার অবজেক্ট বানাবি। আর যদি খাবারের দাম না পায়, তাহলে এরর ম্যাসেজ পাঠাবে "Food Item not found." যদি ডিসকাউন্ট কোড হিসেবে কোনো আর্গুমেন্ট পাস করে, তাহলে discountCodes অবজেক্টে গিয়ে দেখবি, সেই কুপন আছে কি না। সেটা যদি থাকে, তাহলে খাবারের দাম ডিসকাউন্ট কুপনের ডিসকাউন্ট অনুসারে কমাবি। আর যদি ডিসকাউন্ট কুপন না থাকে, তখন একটা এরর ম্যাসেজ দিবি, কুপন কোড ইনভ্যালিড। আর যদি কুপন না থাকে অথবা কুপন কোড ভ্যালিড থাকে, তাহলে একটা অর্ডার অবজেক্ট বানাবি। সেই অর্ডার অবজেক্টে কাস্টমারের নান, রেস্টুরেন্টের নাম, খাবারের নাম, খাবারের দাম এবং status-এর ডিফল্ট মান থাকবে "Pending"। এইটা orders অ্যারেতে যোগ করে দিবি। অর্ডার অবজেক্টে একটা আইডি (id) প্রোপার্টি থাকবে। আর এই আইডি প্রোপার্টির মান হবে orders নামক অ্যারেতে যতগুলো উপাদান আছে, সেই উপাদানের সংখ্যার সাথে। যোগ করে যোগফল হবে আইডির মান। শেষমেশ অর্ডার ঠিকমতো হলে টেমপ্লেট স্ট্রিং দিয়ে একটা স্ট্রিং বানিয়ে সেটা রিটার্ন করবি। আর সেই স্ট্রিংয়ে থাকবে Your Order is Successfully placed Order Id: দিয়ে দিবি।
*/
const restaurants = [
    {
        name: "Jhankar Restaurant",
        menu: {
            pizza: 180,
            burger: 150,
            coke: 30
        }
    },
    {
        name: "Hanki-Panki Restaurant",
        menu: {
            pasta: 120,
            ruti: 70,
            tea: 30
        }
    }
];

const discountCodes = {
    "SAVE10": 0.10,
    "SUMMER20": 0.20
};

let orders = [];

const getFoodPrice = (restaurantName, foodName) => {
    const restaurant = restaurants.find(r => r.name === restaurantName);

    if (!restaurant) {
        return "Restaurant not found.";
    }
    const foodPrice = restaurant.menu[foodName];
    if (foodPrice === undefined) {
        return "Food Item not found.";
    }
    return foodPrice;
}


const placeOrder = (customer, restaurantName, foodItem, discountCode) => {
    const foodPrice = getFoodPrice(restaurantName, foodItem);

    if (typeof foodPrice !== 'number') {
        return foodPrice; 
    }

    let discountedPrice = foodPrice;

    if (discountCode) {
        if (discountCodes.hasOwnProperty(discountCode)) {
            discountedPrice = foodPrice * (1 - discountCodes[discountCode]);
        } else {
            return "Invalid discount code.";
        }
    }
    const order = {
        id: orders.length + 1,
        customer: customer,
        restaurantName: restaurantName,
        foodItem: foodItem,
        price: discountedPrice,
        status: "Pending"
    };
    orders.push(order);

    return `Your Order is Successfully placed. Order Id: ${order.id}`;
}

console.log(placeOrder("Jhankar", "Jhankar Restaurant", "pizza"));
console.log(placeOrder("Hanki", "Hanki-Panki Restaurant", "pasta", "SAVE10"));
console.log(placeOrder("Panki", "Jhankar Restaurant", "salad"));
console.log(placeOrder("Boss", "Hanki-Panki Restaurant", "tea", "INVALID"));

console.log(orders);