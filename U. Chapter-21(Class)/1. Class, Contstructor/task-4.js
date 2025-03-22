/* 
8. Worker নামে একটা class বানিয়ে সেখানে id, name আর hoursWorked নামে প্রোপার্টি যোগ কর। তারপর নতুন worker বানা, যার id হবে 101, name হবে Tom Cruise আর hours Worked হবে 40।
 */

class Worker {
    constructor(id, name, hoursWorked) {
        this.id = id
        this.name = name
        this.hoursWorked = hoursWorked
    }
}

const person = new Worker(101, 'Tom Cruise', 40)
console.log(person);