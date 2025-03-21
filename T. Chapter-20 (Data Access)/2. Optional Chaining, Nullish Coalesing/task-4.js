/* 
8. Optional Chaining দিয়ে vehicle অবজেক্টে engine নামের প্রোপার্টি চেক কর এবং ডিফল্ট মান 'Engine info missing' যোগ কর।
 */
const vehicle = {
    type: 'car',
    color: 'red',
    brandName: 'Toyota',
    model: 'Corolla'
}
const checkEngine = vehicle?.engine ?? 'Engine info missing'
console.log(checkEngine);


