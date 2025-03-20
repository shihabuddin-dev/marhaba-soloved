/* 
৬. Async-await দিয়ে এমন একটা ফাংশন লিখ, যেটা ইউজার ID প্যারামিটার হিসেবে নিবে। তারপর 'https://jsonplaceholder.typicode.com/users/ID' থেকে সেই ইউজারের ডাটা লোড করবে। ইউআরএলের মধ্যে লাস্টে টেমপ্লেট স্ট্রিং দিয়ে প্যারামিটার হিসেবে যেই ID দিবি, সেটা ডায়নামিকভাবে বসিয়ে দিবি। কোনো এরর হলে সেটাকে try-catch দিয়ে হ্যান্ডেল করবি 
*/
const getUserId = async (ID) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ID}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch user data:', error);
    }
};

getUserId(2);