/* 
১. যোগ করলে সংখ্যা টাইপ প্যারামিটার হলে সেটার ডিফল্ট মান 0 হতে পারে। আবার ক্ষেত্রবিশেষে অন্য কোনো উপযুক্ত সংখ্যা হতে পারে।
 */
function add(a = 0, b = 0) {
    return a + b
}
console.log(add());