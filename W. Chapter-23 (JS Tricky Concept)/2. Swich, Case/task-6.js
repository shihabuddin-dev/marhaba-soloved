/* 
৬. একটা grade নামে ভেরিয়েবল থাকবে। সেটার মান A, B, C, D বা F হতে পারে। গ্রেড অনুযায়ী দেখাবি ইউজারের ফলাফল। A হলে "Excellent", B হলে "Good", C হলে "Average", D হলে "Poor", F হলে "Fail" 
*/

let grade = "B";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}