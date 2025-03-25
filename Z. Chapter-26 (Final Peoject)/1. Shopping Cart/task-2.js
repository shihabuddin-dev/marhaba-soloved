/* 
টাস্ক-২: এইবার viewCart নামে একটা ফাংশন লিখে ফেল। এইটার কাজ হবে cart-এর মধ্যে যতগুলো আইটেম আছে। সেগুলোকে কনসোল লগ করবি।
 */

let cart = [
    { productId: 1, quantity: 2, price: 50000 },
    { productId: 2, quantity: 1, price: 20000 }
];

const viewCart = () => {
    if (cart.length === 0) {
        console.log('Your cart is empty.');
    }
    else {
        cart.forEach(item => {
            console.log(`Product ID: ${item.productId}, Quantity: ${item.quantity}, Price: ${item.price}`);
        });
    }
};

viewCart();
