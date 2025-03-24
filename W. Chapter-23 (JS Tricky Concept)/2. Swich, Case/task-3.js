/* 
৩. এইবার paymentMethod নামে ভেরিয়েবল থাকবে। সেটার মান cash, credit. debit বা অন্য কিছু হতে পারে। paymentMethod অনুযায়ী কনসোল লগ করবি। cash হলে দেখাবি "Pay with cash", credit হলে দেখাবি "Pay with credit card", debit হলে দেখাবি "Pay with debit card", অন্য কিছু হলে দেখাবি "Invalid payment method"। এইটা switch দিয়ে করবি।
 */

let paymentMethod = "credit";

switch (paymentMethod) {
    case "cash":
        console.log("Pay with cash");
        break;
    case "credit":
        console.log("Pay with credit card");
        break;
    case "debit":
        console.log("Pay with debit card");
        break;
    default:
        console.log("Invalid payment method");
}