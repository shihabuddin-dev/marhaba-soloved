/* 
১. একটা mobile নামে ভেরিয়েবল থাকবে। সেখানে brand-এর নাম থাকবে। ব্র্যান্ডের ওপর নির্ভর করে switch দিয়ে ডিফারেন্ট case-এ কনসোল লগ করবি কোন দেশ থেকে সেই ব্র্যান্ড এসেছে। ব্র্যান্ড Apple হলে USA, Samsung হলে Korea, Xiaomi হলে China, আর অন্য কিছু হলে Unknown Source লিখবি।
 */

let mobile = "Samsung";
switch (mobile) {
    case "Apple":
        console.log("USA");
        break;
    case "Samsung":
        console.log("Korea");
        break;
    case "Xiaomi":
        console.log("China");
        break;
    default:
        console.log("Unknown Source");
}