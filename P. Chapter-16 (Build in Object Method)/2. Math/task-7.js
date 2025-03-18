/* ৭. একটা ফাংশন লিখ, যেটা একটা দশমিকওয়ালা সংখ্যা ইনপুট প্যারামিটার হিসেবে নিবে। তারপর সেই ফাংশনের ভিতরে সেই সংখ্যাটিকে Math.round Math.floor এবং Math.ceil ব্যবহার করে কনসোল লগ কর */
const getFloatNumber = (floatNum) => {
    const makeRound = Math.round(floatNum)
    const makeFloor = Math.floor(floatNum)
    const makeCeil = Math.ceil(floatNum)
    console.log(`Math.round: ${makeRound}`);
    console.log(`Math.floor: ${makeFloor}`);
    console.log(`Math.ceil: ${makeCeil}`);
}
getFloatNumber(20.3)