/* 
২. Employee ক্লাস বানিয়ে ফেল, যেখানে থাকবে কর্মীর নাম, পদ এবং বেতন। getSalary বললে তার স্যালারি (বেতন) কত, সেটা রিটার্ন করবে।
 */
class Employee {
    constructor(name, position, salary) {
        this.name = name
        this.position = position
        this.salary = salary
    }
    getSalary() {
        return this.salary
    }
}
const person = new Employee('Boss', 'Assistant General', 700000)
console.log(person.getSalary());