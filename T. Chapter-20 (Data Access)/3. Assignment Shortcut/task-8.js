/* 
৮. একটা falsy ভেরিয়েবল tomato = 0 এতে mango &&= 5 ব্যবহার করলে আউটপুট কী হবে এবং কেন?
 */
let tomato = 0
mango &&= 5
console.log(tomato);

/* 
mango ভ্যারিয়েবলটি ডিফাইন করা হয়নি। সেখানে কোনো অপারেশন হয়নি।

&&= অপারেটরটি logical AND assignment অপারেটর। এটি প্রথমে tomato এর মান (যা 0), তারপর 5 এর সাথে logical AND (&&) অপারেশন করে এবং যদি ফলাফল true হয়, তাহলে mango এর মান সেট করা হয়।

যেহেতু 0 falsy ভ্যালু (এটি false), 0 && 5 হবে 0 (logical AND এর ফলে যেহেতু 0 falsy)। তাই, tomato এর মান পরিবর্তন হবে না এবং এটি থাকবে 0।

code error hobe
*/