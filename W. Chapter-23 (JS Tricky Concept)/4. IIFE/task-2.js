/* 
২. একটা IIFE বানা, যেটা নিজে থেকে console-এ "I am isolated from outer scope!" প্রিন্ট করবে।
 */
(function () {
    console.log("I am isolated from outer scope!");
})();