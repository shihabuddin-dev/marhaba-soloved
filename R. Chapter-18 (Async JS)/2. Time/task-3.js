/* 
৩. দুই সেকেন্ড পরপর কনসোলে I am learning javascript লগ করবি এবং ৬ বার আউটপুট দেখানোর পর থেমে যাবে।
 */
const sentence = 'I am learning javascript'
let count = 0

const interval = setInterval(() => {
    count++
    console.log(sentence);
    if (count === 6) {
        clearInterval(interval)
    }
}, 2000);