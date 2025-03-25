/* 
টাস্ক-৩: কোনো একটা রেস্টুরেন্টের টোটাল বিক্রি বের করার জন্য একটা ফাংশন তৈরি কর। এই ফাংশনে একটা রেস্টুরেন্টের নাম নিবে। তারপর onders নামক অ্যারেতে এই রেস্টুরেন্টের যত অর্ডার আছে, সেগুলো ফিল্টার করবি। তারপর reduce ইউজ করে সেই রেস্টুরেন্টের টোটাল বিক্রির পরিমাণ বের করে সেটা রিটার্ন করে দিবি। আর যদি সেই রেস্টুরেন্টের জন্য কোনো অর্ডার খুঁজে না পায়, তাহলে 0 রিটার্ন করে দিবি।
 */

let orders = [
    { id: 1, restaurantName: 'Jhankar Restaurant', price: 500, status: 'Pending' },
    { id: 2, restaurantName: 'Hanki-Panki Restaurant', price: 150, status: 'Completed' },
    { id: 3, restaurantName: 'Hanki-Panki Restaurant 2', price: 300, status: 'Completed' }
];

const getTotalSales = (restaurantName) => {
    const restaurantOrders = orders.filter(order => order.restaurantName === restaurantName && order.status === 'Completed');

    if (restaurantOrders.length === 0) {
        return 0;
    }
    const totalSales = restaurantOrders.reduce((total, order) => total + order.price, 0);

    return totalSales;
};

console.log(getTotalSales('Jhankar Restaurant'));
console.log(getTotalSales('Hanki-Panki Restaurant'));
console.log(getTotalSales('Hanki-Panki Restaurant 2'));
