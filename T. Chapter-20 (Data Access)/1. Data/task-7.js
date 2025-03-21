/* 
৭. ধর, const vehicle = { type: 'car', features: { color: 'red', brand: { name: 'Toyota', model: 'Corolla' }}}| brand-এর name প্রিন্ট করতে তুই একটা প্রোগ্রাম লিখ 
*/
const vehicle = {
    type: 'car',
    features: {
        color: 'red',
        brand: { name: 'Toyota', model: 'Corolla' }
    }
}
console.log(vehicle.features.brand.name);