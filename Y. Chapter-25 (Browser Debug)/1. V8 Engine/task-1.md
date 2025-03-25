**১. জাভাস্ক্রিপ্টের কোড কীভাবে চলে?**

জাভাস্ক্রিপ্টের কোড **Execution Context** এর মাধ্যমে চলে। এটি সাধারণত তিনটি ধাপে কাজ করে:  

১. **Creation Phase (সৃষ্টির ধাপ)**  
   - একটি **Global Execution Context (GEC)** তৈরি হয়।  
   - **Variable Hoisting** হয় (var ও function ডিক্লেয়ারশন মেমোরিতে আগে সংরক্ষণ হয়)।  
   - `this` কীওয়ার্ড সেট হয়।  

২. **Execution Phase (প্রোগ্রাম চলার ধাপ)**  
   - কোড লাইন বাই লাইন এক্সিকিউট হয়।  
   - ফাংশন কল হলে নতুন **Execution Context** তৈরি হয় এবং **Call Stack**-এ যোগ হয়।  

৩. **Asynchronous Handling**  
   - **Web APIs, Callback Queue, এবং Event Loop** ব্যবহার করে অ্যাসিনক্রোনাস কোড এক্সিকিউট হয় (যেমন: `setTimeout()`, `fetch()`)।  

অবশেষে, সব কোড শেষ হলে **Call Stack খালি হয়**, এবং প্রোগ্রাম থামে।