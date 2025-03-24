/* 
২. browser নামে একটা ভেরিয়েবল থাকবে। সেটার মান Chrome, Brave, Safari বা অন্য কিছু হতে পারে। কনসোল লগ করবে "Best for developers", যদি Chrome হয়, "Privacy focused", যদি Brave হয়, "Apple user's choice" যদি Safari হয়। অন্য কিছু হলে দেখাবে "Unsupported browser"। এইটা কিন্তু প্রথমে if-else দিয়ে করবি। তারপর switch দিয়ে করবি।
 */

let browser = "Chrome"; 

if (browser === "Chrome") {
  console.log("Best for developers");
} else if (browser === "Brave") {
  console.log("Privacy focused");
} else if (browser === "Safari") {
  console.log("Apple user's choice");
} else {
  console.log("Unsupported browser");
}

switch (browser) {
  case "Chrome":
    console.log("Best for developers");
    break;
  case "Brave":
    console.log("Privacy focused");
    break;
  case "Safari":
    console.log("Apple user's choice");
    break;
  default:
    console.log("Unsupported browser");
}