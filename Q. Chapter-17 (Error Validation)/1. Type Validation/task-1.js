/* 
১. একটা ফাংশন বানা, যা নামের প্রথম অক্ষর রিটার্ন করবে। ইনপুট যদি string না হয়, তখন validation ম্যাসেজ দিবে।
 */
const getString = (names) => {
    if (typeof names !== 'string') {
        return 'This is not String'
    };
    const firstLetter = names[0]
    return firstLetter
}
console.log(getString(500));
console.log(getString('Boss'));