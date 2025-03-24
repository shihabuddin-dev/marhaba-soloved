/* 
৪. একটা IIFE বানা, যেটা temperature প্যারামিটার নেবে এবং কেলভিন থেকে সেলসিয়াসে কনভার্ট করবে। কনভার্ট করার ফর্মুলা হলো- celsius = kelvin - 273.15। তারপর কনভার্ট করা মানটা প্রিন্ট কর 
*/

((temperature) => {
    const celsius = temperature - 273.15;
    console.log(celsius);
})(300);