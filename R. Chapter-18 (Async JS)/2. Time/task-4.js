/* 8. setTimeout()-এর সেকেন্ড প্যারামিটার বাদ দিলে ডিফল্ট হিসেবে কত মাইক্রোসেকেন্ড ধরে নেয় */

// setTimeout() ফাংশনের দ্বিতীয় প্যারামিটার (delay) না দিলে, ডিফল্টভাবে 0 মিলিসেকেন্ড (অর্থাৎ 0 মাইক্রোসেকেন্ড) ধরে নেয়। 

setTimeout(() => {
    console.log('Hello Boss');
})
console.log('Before Boss Come');