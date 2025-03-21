/* 
২. একটা product অবজেক্টে stock নামের প্রোপার্টি নাই; Nullish Coalescing দিয়ে stock-এর ডিফল্ট মান 0 সেট কর।
 */
let product = {
    name: 'Shirt',
    price: 700
}
product.stock ??= 0;
console.log(product);