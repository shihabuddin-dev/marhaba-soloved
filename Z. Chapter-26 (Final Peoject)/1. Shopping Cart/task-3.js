/* 
টাস্ক-৩: শেষমেষ placeOrder নামে আরেকটা ফাংশন লিখ। এইটা চেক করবে cart-এর মধ্যে মিনিমাম একটা আইটেম আছে কি না। যদি না থাকে, তাহলে "Your cart is empty." লিখে রিটার্ন করে দিবি। আর যদি cart-এর মধ্যে একটার বেশি আইটেম থাকে তাহলে লুপ করে cart-এর মধ্যে যত আইটেম আছে। প্রত্যেকটার কোয়ান্টিটির সাথে দাম গুণ করে গুণফল যোগ করে মোট কত টাকা দিতে হবে সেটা বের করবি। এরপর একটা অবজেক্ট বানাবি, সেখানে টোটাল প্রাইস নামে একটা প্রোপার্টি থাকবে। সেটা oders অ্যারেতে যোগ করে দিবি। তারপর cart-এ যত আইটেম আছে, সব রিমুভ করে দিবি। এরপর "Order placed." রিটার্ন করে দিবি 
*/

let cart = [
    { productId: 1, quantity: 2, price: 50000 },
    { productId: 2, quantity: 1, price: 20000 }
];

let orders = [];

const placeOrder = () => {
    if (cart.length === 0) {
        return 'Your cart is empty.';
    } else {
        let totalPrice = 0;
        for (const item of cart) {
            totalPrice += item.quantity * item.price;
        }
        const order = {
            totalPrice: totalPrice
        };
        orders.push(order);
        cart.length = 0;
        return 'Order placed.';
    }
};

console.log(placeOrder());
console.log(orders);
console.log(cart);