/* 
৩. shopping cart অবজেক্ট বানা, যার মধ্যে products (array of products) total price (সবগুলো প্রোডাক্টের টোটাল প্রাইস) এবং user details (name, id, contact) থাকবে। এরপর এটাকে JSON স্ট্রিংয়ে কনভার্ট কর।
*/
const shoppingCart = {
    user: 'shihab',
    id: 100,
    contact: 'shiahb11@gmail.com',
    products: [
        { name: 'Shirt', price: 500 },
        { name: 'panjabi', price: 1400 },
        { name: 'pant', price: 700 },
    ],
    totalPrice: 500 + 1400 + 700
}
const makeJson = JSON.stringify(shoppingCart)
console.log(makeJson);