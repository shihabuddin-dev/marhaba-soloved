/* 
১. ল্যাপটপ নামে একটা ভেরিয়েবল ডিক্লেয়ার কর। সেটার মধ্যে ব্র্যান্ড নামে একটা প্রোপার্টি থাকবে, যার মান হবে dell এবং getBrand নামে একটা মেথড থাকবে, যেটা ল্যাপটপের brand-কে কনসোল লগ করবে। এখন মোবাইল নামে একটা অবজেক্ট ডিক্লেয়ার কর। মোবাইলের মধ্যে ব্র্যান্ড থাকবে। তারপর ল্যাপটপ অবজেক্টের getBrand মেথডটি মোবাইলে এনে ইউজ কর।
 */
const laptop={
    brand: 'dell',
    getBrand: function(){
        console.log(this.brand);
    }
}
const mobile={
    brand: 'samsung'
}
mobile.getBrand= laptop.getBrand;
mobile.getBrand()