/* 
৩. তুই একটা taskTracker() ফাংশন বানা, যেখানে প্রতিবার একটা কাজ ফিনিশ হওয়ার পর কাউন্ট এক এক করে বাড়বে। তোর বা তোর ফ্রেন্ড সবার কাজের স্কোপ আলাদা আলাদা থাকবে।
 */


function taskTracker(name) {
    let count = 0;
    return function () {
        count++;
        console.log(`${name} finished ${count} tasks.`);
    };
}


const shihabTasks = taskTracker("Shihab");
const omarTasks = taskTracker("Omar");
const bossTasks = taskTracker("Boss");


shihabTasks();
omarTasks();
bossTasks();

shihabTasks();
omarTasks();
bossTasks();


