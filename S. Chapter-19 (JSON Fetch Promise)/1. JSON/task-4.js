/* 
৪. একটা weather অবজেক্ট বানা, যার মধ্যে city, temperature, humidity এবং forecast (array) থাকবে। forecast array-তে অন্তত 7 দিনের সম্ভাব্য টেম্পারেচার থাকবে। এটাকে জেশনে কনভার্ট কর।
 */
const weather = {
    city: 'Bogura',
    temperature: 30,
    humidity: 'normal',
    forecast: [31, 32, 33, 30, 29, 28, 30]
}
const makeJson = JSON.stringify(weather)
console.log(makeJson);