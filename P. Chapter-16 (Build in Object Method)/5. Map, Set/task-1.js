/* 
১. ডুপ্লিকেট বাদ দিয়ে একটা নতুন সেট তৈরি কর [1, 2, 2, 3, 4, 4, 5]
 */

const numbers = [1, 2, 2, 3, 4, 4, 5]

// way 1 
const removeDuplicate = new Set(numbers)
console.log(removeDuplicate);

// way -2 
const uniqueNumbers = [...new Set(numbers)]
console.log(uniqueNumbers);