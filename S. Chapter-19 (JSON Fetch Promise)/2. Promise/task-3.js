/* 
৩. এখন sendEmail নামে একটা ফাংশন বানিয়ে ফেল। সেই ফাংশনের ভিতরে "একটা প্রমিজ বানিয়ে ফেলবি এবং সেই প্রমিজকে রিটার্ন করবি। এই ফাংশন একটা প্যারামিটার নিবে। প্যারামিটার হিসেবে একটা ই-মেইল নিবি এবং প্রমিজের ওপরে সেই ফাংশনের ভিতরে validEmail-এর একটা অ্যারে থাকবে। যে ই-মেইল প্যারামিটার হিসেবে পাঠানো হয়েছে, সেটা যদি validEmail-এর অ্যারের মধ্যে থাকে, তাহলে প্রমিজ resolve করে বলে দিবে, Email from Nigerian prince। আর যদি ই-মেইল এড্রেস validEmail-এর মধ্যে না পায়, তাহলে বলে দিবে. Lets Dance in the spam folder 
*/
const sendEmail = (email => {
    return new Promise((resolve, reject) => {
        const validEmail = ['shihab22@gmail.com', 'omar23@gmail.com', 'siam11@gmail.com']
        if (validEmail.includes(email)) resolve('Email from Nigerian prince')
        else reject('Lets Dance in the spam folder')
    })
})
sendEmail('siam11@gmail.com')
    .then((message) => console.log(message))
    .catch(error => console.log(error))