/* 
২. একটা ফাংশন লিখ array-এর শেষ উপাদান দিবে। ইনপুট array না হলে ওয়ার্নিং ম্যাসেজ দিবে।
 */
const getArray = (numbers) => {
    if (Array.isArray(numbers) == false) {
        return 'Boss Please give me an Array'
    }
    const lastIndex = numbers[1]
    return lastIndex
}
const array = getArray([20, 30, 50])
console.log(array);