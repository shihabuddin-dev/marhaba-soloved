/* 
৩. if ব্লকের ভিতরে let দিয়ে temperature ভেরিয়েবল ডিক্লেয়ার কর এবং সেই বুকের বাইরে থেকে অ্যাক্সেস করার চেষ্টা কর।
 */
if(true){
    let temperature = 200
}
console.log(temperature);

// let ব্লক-স্কোপড, যে ব্লকে ডিক্লেয়ার করা হয়, সেই ব্লকের বাইরে থেকে এক্সেস করা যায় না। 