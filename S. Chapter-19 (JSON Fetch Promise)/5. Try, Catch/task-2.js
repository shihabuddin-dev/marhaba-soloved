/* 
২. validateInput নামে একটা ফাংশন বানা, যেটা ইউজারের ইনপুট চেক করবে। ইনপুট হতে হবে email address (যেমন test@example.com)। ইনপুট ই-মেইলে যদি চিহ্ন না থাকে, তাহলে custom error দেখাবে "Invalid email format"
*/
function validateInput(input) {
    try {
        if (!input.includes('@')) {
            throw new Error("Invalid email format");
        }
        console.log('Valid Input', input);
    }
    catch (error) {
        console.error('custom error:', error.message);
    }
}
validateInput("test@example.com");
// validateInput("testexample.com");