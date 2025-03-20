/* 
২. একটা async ফাংশন লিখে ফেল, আর এইটার নাম দিবি fetchUser এই ফাংশনের ভিতরে এই url লিংক 'https://jsonplaceholder.typicode.com/users/2' থেকে ডাটা লোড করে ডাটাকে console লগ করবি। এ ছাড়া অবশ্যই try-catch ইউজ করবি।
 */
const fetchUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/2')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('Error fetching user:', error);
    }
}
fetchUser()