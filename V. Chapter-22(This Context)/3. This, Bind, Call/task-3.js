/* 
৩. একটা অবজেক্ট বানা "employee" নামে, যার মধ্যে name এবং role থাকবে। মধ্যে একটা মেথড থাকবে "details" নামে, যেখানে this.name এবং this.role দিয়ে কনসোল লগ করবে। প্রথমে employee থেকে details মেথড কল করে আউটপুট দেখ। এরপর আরেকটা অবজেক্ট বানা "manager" নামে, যার মধ্যে name এবং role থাকবে। এখন .apply() ব্যবহার করে employee-এর details মেথড manager ইউজ কর 
*/

const employee = {
    name: "Jhankar",
    role: "Software Engineer",
    details: function () {
        console.log(`Name: ${this.name}, Role: ${this.role}`);
    }
};

employee.details();

const manager = {
    name: "Milton",
    role: "Course Manager"
};

employee.details.apply(manager);

