/* 
৫. অনলাইনে কোনো কিছু অর্ডার দিলে orderStatus থাকে। তাই এই orderStatus নামে ভেরিয়েবল থাকবে। সেটা pending, shipped, delivered বা cancelled হতে পারে। status অনুযায়ী কনসোল লগ করবি। যেমন, pending হলে "Your order is being processed", shipped হলে "Your order is on the way". delivered হলে "Your order has been delivered", cancelled হলে "Your order was cancelled".
 */

let orderStatus = "shipped";

switch (orderStatus) {
    case "pending":
        console.log("Your order is being processed");
        break;
    case "shipped":
        console.log("Your order is on the way");
        break;
    case "delivered":
        console.log("Your order has been delivered");
        break;
    case "cancelled":
        console.log("Your order was cancelled");
        break;
    default:
        console.log("Invalid order status");
}