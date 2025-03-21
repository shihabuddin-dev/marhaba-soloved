/* 
৫. Optional Chaining দিয়ে restaurant অবজেক্টে menu নামে প্রোপার্টি রিড কর এবং সেটা না থাকলে 'Menu not available' রিটার্ন কর।
 */
const restaurant = {
    name: 'IIN',
    ratings: 4.5,
    food: ['BD', 'chinese', 'Arabian'],
}
const readMenu = restaurant?.menu ?? 'Menu not available'
console.log(readMenu);