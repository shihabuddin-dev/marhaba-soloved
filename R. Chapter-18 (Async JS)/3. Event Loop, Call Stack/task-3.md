**৩. জাভাস্ক্রিপ্ট যদি সিঙ্গেল থ্রেডেড হয়, তাহলে asynchronous কাজগুলো কীভাবে হ্যান্ডেল করে**

**asynchronous** কাজের জন্য **callback functions**, **Promises**, এবং **async/await** ব্যবহৃত হয়। তবে, সিঙ্গেল থ্রেডেড হওয়া মানে হল যে জাভাস্ক্রিপ্ট শুধুমাত্র একটি একক থ্রেডে কাজ করে, কিন্তু তারপরে কীভাবে asynchronous কাজগুলো চলে

---
- **JavaScript** একক থ্রেডেড হলেও **asynchronous** কাজগুলি **Event Loop** এবং **Callback Queue** ব্যবহার করে সম্পন্ন করা হয়।
- **Web API** বা **Node.js API**-এ asynchronous কাজগুলো সঞ্চালিত হয় এবং কাজ শেষ হলে তা **callback queue**-এ চলে যায়।
- যখন **Call Stack** খালি থাকে, **Event Loop** **callback queue** থেকে কাজ নিয়ে **Call Stack**-এ নিয়ে আসে এবং কার্যকর করে।
- এইভাবে, **JavaScript** asynchronous কাজের জন্য থ্রেড ব্লক না করে **non-blocking** পদ্ধতিতে কাজ করে, যা একক থ্রেডের মধ্যে অনেক কাজ সম্পন্ন করতে সক্ষম হয়।