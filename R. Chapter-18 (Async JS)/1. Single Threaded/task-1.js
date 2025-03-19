/* ১. সিনক্রোনাস কোডের মধ্যে ফাংশন কল করার পর কী হবে? */

// সিনক্রোনাস (Synchronous) কোড লাইন বাই লাইন এক্সিকিউট হয়। যখন কোনো ফাংশন কল করা হয়, তখন সেই ফাংশন শেষ না হওয়া পর্যন্ত পরবর্তী কোড এক্সিকিউট হয় না।

function firstFunction() {
    console.log("Hello Boss 1");
}

function secondFunction() {
    console.log("Hello Boss 2");
}

firstFunction();
secondFunction();
