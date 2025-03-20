/* 
১. একটা কোড লিখ, যেখানে JSON.parse ব্যবহার করে ডাটা পার্স করার চেষ্টা করবি। ধর, JSON ডাটা হলো {product: 'Date', price: 450}। তবে সার্ভার কোনো সময় ভুল ডাটা পাঠাতে পারে, যেমন "Data corrupted" লিখে স্ট্রিং ডাটা পাঠিয়ে দিল। যদি এরর হয়, সেটা catch ব্লকে হ্যান্ডেল করবি এবং কনসোলে ম্যাসেজ দিবি "Invalid JSON format"
 */
const jsonData = {
    product: 'Date',
    price: 450
}
const corruptedData = 'Data corrupted';

try {
    const parsedData = JSON.parse(corruptedData)
    console.log(parsedData);
} catch (error) {
    console.log('Invalid JSON format', error);
}