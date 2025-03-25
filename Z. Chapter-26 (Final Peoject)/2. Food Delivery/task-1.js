/* 
টাঙ্ক-১: খাবারের দাম পাওয়ার জন্য getFoodPrice নামে একটা ফাংশন লিখে ফেল। যেখানে দুইটা প্যারামিটার থাকবে। প্রথমটা হবে রেস্টুরেন্টের নাম, আর সেকেন্ডটা হবে সেই রেস্টুরেন্টের খাবারের নাম। সেই ফাংশনের ভিতরে restaurants নামক অ্যারেতে খুঁজে দেখবি, যে নাম দিছে, সেই নামের রেস্টুরেন্ট আছে কি না। যদি থাকে, তাহলে সেই রেস্টুরেন্টের মেনুতে গিয়ে যে খাবারের নাম দিছে, সেই খাবার আছে কি না, সেটা চেক করবি। যদি খাবার পেয়ে যায়, তাহলে সেটার দাম রিটার্ন করে দিবি। আর যদি খাবার না পায়, তাহলে একটা স্ট্রিং রিটার্ন করে বলবি "Food Item not found."আবার যখন রেস্টুরেন্টের নাম দিয়ে রেস্টুরেন্ট খুঁজবে, তখন যদি রেস্টুরেন্ট না পায়, তখন একটা স্ট্রিং রিটার্ন করে বলবে "Restaurant not found."
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

console.log(getFoodPrice("Jhankar Restaurant", "pizza"));
console.log(getFoodPrice("Boss Restaurant", "tea"));
console.log(getFoodPrice("Hanki-Panki Restaurant", "tea"));  