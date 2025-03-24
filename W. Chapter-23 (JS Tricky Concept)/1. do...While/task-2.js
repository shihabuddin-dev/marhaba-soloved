/* 
২. এইবার attempts নামে একটা ভেরিয়েবল থাকবে। চেক করবি, এই attempts-এর মান 10-এর নিচে কি না। যদি 10-এর কম হয়, তাহলে do...while লুপ চলবে। এর লুপের ভিতরে attempts-এর মান এক এক করে বাড়বে। আর তুই যখন শুরু করবি, তখন attempts ভেরিয়েবলের প্রাথমিক মান 12।
 */
let attempts = 5;

if (attempts < 10) {
    do {
        console.log(attempts);
        attempts++
    } while (attempts < 10);
}
else console.log('This value is not less than 10');