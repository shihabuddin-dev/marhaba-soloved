**8. function expression দিয়ে লেখা ফাংশনকে hoisting করলে কেন initialization-এর আগে কল করা যায় না?**

**Function expression** দিয়ে লেখা ফাংশনকে **hoist** করলে **initialization**-এর আগে কল করা যায় না কারণ, **function expression** শুধুমাত্র ভেরিয়েবল ডিক্লেয়ারেশনকে hoist করে, কিন্তু ফাংশনটির মান (ইনিশিয়ালাইজেশন) পরে সেট হয়। এর ফলে, ফাংশনটি ডিক্লেয়ার হওয়ার আগে **undefined** থাকে, এবং তখন সেটি কল করলে **TypeError** হয়। 

```javascript
greet();  // TypeError: greet is not a function
const greet = function() { console.log("Hello!"); };
```
এটি **TDZ (Temporal Dead Zone)** এর কারণে ঘটে, যেখানে ভেরিয়েবল ডিক্লেয়ার হওয়ার আগে সেটি ব্যবহার করা সম্ভব নয়।