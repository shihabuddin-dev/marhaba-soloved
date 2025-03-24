/* 
৩. manager নামে একটা অবজেক্ট তৈরি কর। যার মধ্যে assignWork নামে মেথড থাকবে। সেই assignWork মেথডের ভিতরের manager-এর tasks নামক প্রোপার্টি (একটা অ্যারে), সেটাতে নতুন টাস্কের নাম যোগ করবে। এই কোড লিখে আউটপুট চেক কর। আর এই মেথডের ভিতরে this বলতে কাকে বোঝায়, সেটা মেথডের ওপরে কমেন্ট করে লিখ 
*/


const manager = {
    tasks: [],
    assignWork: function (task) {
        this.tasks.push(task);
        console.log(`New Task Added: ${task}`);
    }
};

manager.assignWork("Complete project report");
manager.assignWork("Team meeting at 3 PM");

console.log(manager.tasks); 