/* 
8. Array-এর মধ্যে [1, 2, 3, 4, 2, 1, 5, 5] উপাদানগুলো নিয়ে সেট তৈরি কর এবং সেই সেটকে array-তে রূপান্তর কর 
*/
const numbers = [1, 2, 3, 4, 2, 1, 5, 5]
const uniqueSet = new Set(numbers)
const uniqueArray = [...uniqueSet]
console.log(uniqueArray);