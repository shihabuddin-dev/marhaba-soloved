/* 
৩. [10, 20, 30, 40, 50] তারপর এর মধ্য থেকে 2 ইনডেক্স (যেটাতে 30 আছে) এলিমেন্টটি ডিলিট কর। পরে ঐ ইনডেক্সে গিয়ে দেখ, কীরকম আউটপুট আসে 
*/
const numbers = [10, 20, 30, 40, 50]
numbers.splice(2, 1)
console.log(numbers);
console.log(numbers[2]);