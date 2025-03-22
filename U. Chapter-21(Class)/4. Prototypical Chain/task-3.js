/* 
৩. একটা person অবজেক্ট বানিয়ে ফেল, যেটাতে শুধু name প্রোপার্টি আছে। এখন চেক কর, এর প্রোটোটাইপে কিছু আছে কি না। থাকলে সেখান থেকে যেকোনো একটা মেথড ইউজ করে দেখ, কী আউটপুট দেখায়।
 */
const person = {
    name: "Shihab"
};
console.log(Object.getPrototypeOf(person));
console.log(person.hasOwnProperty("name")); 
