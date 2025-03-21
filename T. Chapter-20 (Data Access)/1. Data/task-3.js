/* 
৩. তোর কাছে const school = { name: 'Green High', students: [{ id: 1, name: 'Samiha'}, { id: 2, name: 'Kamal'}]} নামক একটা অবজেক্ট আছে। এবার students array থেকে প্রথম শিক্ষার্থীর name প্রিন্ট করতে তুই একটা প্রোগ্রাম লিখ।
 */
const school = {
    name: 'Green High',
    students: [
        { id: 1, name: 'Samiha' },
        { id: 2, name: 'Kamal' }
    ]
}
console.log(school.students[0].name);