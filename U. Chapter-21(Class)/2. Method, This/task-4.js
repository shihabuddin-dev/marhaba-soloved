/* 
৪. এখন একটা ShoppingCart ক্লাস লিখে ফেল, যেখানে products নামে একটা প্রোপার্টি থাকবে, আর totalPrice নামে একটা প্রোপার্টি থাকবে। যখন এই ক্লাস থেকে অবজেক্ট বানাবি, তখন products হবে একটা খালি অ্যারে, আর totalPrice হবে 0 এরপর addToCart একটা মেথড হবে। এইটাকে কল করতে গেলে দুইটা প্যারামিটার লাগবে। একটা প্যারামিটারে থাকবে প্রোডাক্টের নাম, আরেকটা প্যারামিটার হবে প্রোডাক্টের দাম। আর এই addToCart-কে কল করলে সে প্রোডাক্টের নামকে products নামক প্রোপার্টিতে যোগ করে দিবে। আর প্রোডাক্টের দাম totalPrice নামক প্রোপার্টির আগের ভ্যালুর সাথে যোগ করে দিবে। সবার শেষে getTotalPrice নামে আরেকটা মেথড লিখে ফেল, যে টোটাল প্রাইস রিটার্ন করবে 
*/
class ShoppingCart {
    constructor() {
        this.products = []
        this.totalPrice = 0
    }
    addToCart(productName, productPrice) {
        this.products.push(productName)
        this.productPrice += productPrice
    }
    getTotalPrice() {
        return this.totalPrice
    }
}
const cart = new ShoppingCart()
cart.addToCart("Laptop", 1000);
cart.addToCart("Phone", 500);
console.log(cart.getTotalPrice());