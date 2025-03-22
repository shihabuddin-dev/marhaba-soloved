/* 
৬. Classroom নামে একটা class বানা, যেখানে students নামে একটা প্রোপার্টি থাকবে, যা শুরুতে খালি array হবে। constructor-এর মধ্যে section আর teacher প্রোপার্টি রাখ। তারপর Classroom থেকে একটা instance বানা, যার section হবে A আর teacher হবে Mr. Plumber  
*/
class Classroom {
    constructor(section, teacher) {
        this.section = section
        this.teacher = teacher
        this.student = []
    }
}
const classA = new Classroom('A', 'Mr. Plumber')
console.log(classA);