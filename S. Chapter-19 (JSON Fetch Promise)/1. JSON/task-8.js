/* 
৮. ইকমার্স ওয়েবসাইটে product review-এর ডাটা বানিয়ে ফেল। যেখানে প্রত্যেকটা রিভিউ অবজেক্টে product name, reviewer details (name, email), rating, and review text থাকবে। এরপর সেই অবজেক্টটিকে JSON.stringify দিয়ে কনভার্ট কর। সেই json-কে আবার জাভাস্ক্রিপ্ট অ্যারেতে কনভার্ট কর 
*/
const productReview = [
    {
        productName: "Wireless Headphones",
        reviewer: {
            name: "Shihab",
            email: "shihab22@gmail.com"
        },
        rating: 4.5,
        reviewText: "Great sound quality and battery life!"
    },
    {
        productName: "Smartphone X",
        reviewer: {
            name: "omar",
            email: "omar225@gmail.com"
        },
        rating: 4.8,
        reviewText: "Amazing camera and smooth performance!"
    },
    {
        productName: "Gaming Laptop",
        reviewer: {
            name: "Siam",
            email: "siam335@gmail.com"
        },
        rating: 4.2,
        reviewText: "Powerful specs, but a bit heavy to carry."
    }
];

const makeJson = JSON.stringify(productReview)
console.log(makeJson);