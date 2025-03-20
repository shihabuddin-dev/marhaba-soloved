/* ২. একটা অবজেক্ট বানা, যেখানে একটা user থাকবে। user-এর মধ্যে name, email address, এবং একটা order history থাকবে। সেই order history-তে অন্তত তিনটা প্রোডাক্ট থাকবে। JSON.stringify দিয়ে পুরা অবজেক্টটাকে JSON স্ট্রিংয়ে কনভার্ট কর।
 */
const user = {
    name: 'shihab',
    'email address': 'shihab11@gmail.com',
    'order history': [
        { product: 'Laptop', price: 20000 },
        { product: 'Phone', price: 30000 },
        { product: 'Cap', price: 200 },
    ]
}
const convertToJson = JSON.stringify(user)
console.log(convertToJson);