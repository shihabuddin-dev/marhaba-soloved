/* 
৫. getDay ব্যবহার করে 2029-02-16 তারিখের সপ্তাহের দিন এবং সে দিনের নাম বের কর 
*/
const myDate = new Date(2029, 2, 16)
const dayNumber = myDate.getDay()
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`Day number is: ${dayNumber}`);
console.log(`Day name: ${dayNames[dayNumber]}`);