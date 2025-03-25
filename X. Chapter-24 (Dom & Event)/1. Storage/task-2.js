/* 
২. Local Storage ব্যবহার করে ইউজারের ডার্ক মোড প্রেফারেন্স (on/off) সেভকর। একটা key সেট কর। যেটার নাম হবে mode এবং সেটার ভ্যালু dark সেট কর। তারপরে আবার এই mode-এর মান light সেট কর।
 */

localStorage.setItem(' mode', 'dark')
localStorage.setItem(' mode', 'light')
console.log(localStorage.getItem(' mode'));