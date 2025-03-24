/* 
৩. name নামে ভেরিয়েবল থাকবে, যার মান হবে "John"। এরপর do...while লুপ চালাবি। লুপের ভিতরে প্রত্যেকবার name-এর পিছনে n যোগ করবি। আর লুপের শর্তে চেক করবি, name-এর length-এর মান 10-এর কম কি না। কম হলে লুপ চলতে থাকবে 
*/
let name = "John";

do {
    name += "n";
    console.log(name);
} while (name.length < 10);