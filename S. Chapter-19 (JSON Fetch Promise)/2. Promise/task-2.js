/* 
২. তুই একটা পেমেন্ট প্রসেস করার প্রমিজ বানা। সেখানে amount নামে একটা ভেরিয়েবল থাকবে। এই ভেরিয়েবলের মান পজিটিভ হলে (0 এর বেশি হলে) প্রমিজ সফলভাবে প্রসেস হবে। আর যদি এমাউন্টের মান 0 বা তার কম হলে প্রমিজ reject হবে 
*/
const paymentProcess = new Promise((resolve, reject) => {
    const amount = 200
    if (amount > 0) resolve('Success')
    else reject('Failed')
})
paymentProcess.then((message) => console.log(message))
    .catch(error => console.log(error))