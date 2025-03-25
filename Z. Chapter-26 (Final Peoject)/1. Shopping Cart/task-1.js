/* 
টাস্ক-১: একটা addToCart ফাংশন লিখে ফেল। এইটার মধ্যে প্রোডাক্টের আইডি, আর কয়টা প্রোডাক্ট কিনতে চায়, সেই কোয়ান্টিটি দিবি। ভিতরে গিয়ে প্রথমে চেক করবি, এই আইডির প্রোডাক্ট আছে কি না। যদি থাকে তাহলে, কিছু কাজ করবি। আর যদি না থাকে, তাহলে "Product not found." এরর রিটার্ন করবি। প্রোডাক্ট পাওয়া গেলে চেক করবি, প্রোডাক্টের যে কোয়ান্টিটি কিনতে চায়, সেই কোয়ান্টিটির সমান বা বেশি স্টকে আছে কি না। যদি থাকে, তাহলে প্রোডাক্টে
স্টক থেকে অর্ডার কোয়ান্টিটির সংখ্যা কমাবে। তারপর একটা অবজেক্ট বানাবি, সেখানে প্রোডাক্ট আইডি, কোয়ান্টিটি এবং প্রাইস থাকবে। প্রাইস নিবি প্রোডাক্ট থেকে। তারপর এই অবজেক্টটা cart-এর মধ্যে যোগ করে দিবি। আর একটা টেমপ্লেট স্ট্রিং দিয়ে '${product.name} added to cart, Quantity: ${quantity)' লিখে সেটা রিটার্ন করবি।
*/

const products = [
    { id: 1, name: 'Laptop', stock: 10, price: 50000 },
    { id: 2, name: 'Phone', stock: 5, price: 20000 },
    { id: 3, name: 'Headphones', stock: 0, price: 1500 }
];
let cart = [];
const addToCart = (productId, quantity) => {
    const product = products.find(p => p.id === productId);
    if (!product) {
        return 'Product not found.';
    }
    if (product.stock >= quantity) {
        product.stock -= quantity;
        const order = {
            productId: product.id,
            quantity: quantity,
            price: product.price
        };

        cart.push(order);
        return `${product.name} added to cart, Quantity: ${quantity}`;
    }
    else {
        return `Not enough stock for ${product.name}. Available stock: ${product.stock}`;
    }
}

console.log(addToCart(1, 2));
console.log(addToCart(2, 6));
console.log(addToCart(4, 1)); 
