/* 
১. সাতটা সংখ্যা 45, 11,89,23,56,-12,-56-এর মধ্যে সবচেয়ে ছোট সংখ্যা বের কর।
*/
const numbers = [45, 11, 89, 23, 56, -12, -56]
const smallNumber = Math.min(...numbers)
console.log(smallNumber);