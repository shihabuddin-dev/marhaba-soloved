/* 
৩. JSON.parse ব্যবহার করে এমন একটা কোড ব্লক লিখে ফেল, যেখানে try ব্লকে ধর {role: 'CEO', weekly Hours: 1000} ডাটা আসছে। যদি ডাটা পার্স করতে পারিস এবং এরর খায়। যেটাই হোক না কেন, কনসোলে দেখাবি "Week is over"
 */
const jsonData = '{ "role": "CEO", "weeklyHours": 1000 }';
try {
    const parsedData = JSON.parse(jsonData)
    console.log('Parsed Data', parsedData);
} catch (error) {
    console.error('Error Parsing:', error)
} finally {
    console.log('Week is over');
}