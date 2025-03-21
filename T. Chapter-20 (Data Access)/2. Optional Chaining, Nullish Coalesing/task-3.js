/* 
৩. productDetails অবজেক্টে discount ভেরিয়েবলের মান falsy কোনো কিছু হলে সেটার মান 10 সেট করার কোড লেখ।
 */

const productDetails = {
    name: "Laptop",
    price: 50000,
    discount: ''
};

productDetails.discount = productDetails?.discount || 10;
console.log(productDetails);
