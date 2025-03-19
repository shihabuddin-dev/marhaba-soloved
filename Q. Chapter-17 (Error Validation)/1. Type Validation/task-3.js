/* 
৩. rectangle-এর area বের করার getArea ফাংশন বানা, যেখানে length আর width নাম্বার না হলে validation ম্যাসেজ দিবে। এরিয়া বের করার জন্য length আর width গুণ করে দিলেই হবে 
*/
const getArea = (length, width) => {
    if (typeof length !== 'number') {
        return 'Please Give me a Valid Length'
    }
    if (typeof width !== 'number') {
        return 'Please Give me a Valid Width'
    }
    const area = length * width
    return area
}
console.log(getArea(20, 10));