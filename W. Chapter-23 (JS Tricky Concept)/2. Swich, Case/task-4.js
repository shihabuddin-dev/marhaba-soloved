/* 
৪. একটা membership নামে ভেরিয়েবল থাকবে। সেখানে free, silver, gold বা platinum-এর মান থাকবে। membership অনুযায়ী দেখাবি ইউজারের পারমিশন। যেমন, free হলে "Access limited content", silver হলে "Access most content", gold হলে 'Access premium content', platinum হলে "Full access"। এইটা শুধু if-else দিয়ে করবি।
 */

let membership = "gold";

if (membership === "free") {
    console.log("Access limited content");
} else if (membership === "silver") {
    console.log("Access most content");
} else if (membership === "gold") {
    console.log("Access premium content");
} else if (membership === "platinum") {
    console.log("Full access");
} else {
    console.log("Invalid membership type");
}