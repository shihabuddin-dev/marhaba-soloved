/* 
৪. একটা অবজেক্ট বানা "classroom" নামে, যার মধ্যে name এবং students থাকবে। students-এর মধ্যে অনেকগুলো student-এর নাম থাকবে। classroom-এর মধ্যে একটা মেথড থাকবে "attendance" নামে, যেখানে this.name এবং this. students-এর নামগুলো কমা দিয়ে join করে স্ট্রিং বানিয়ে কনসোল লগ করবে। প্রথমে classroom থেকে attendance মেথড কল করে আউটপুট দেখ। এরপর অন্য একটা অবজেক্ট বানা "lab" নামে, যার মধ্যে name এবং students থাকবে। এবার .bind() ব্যবহার করে classroom-এর attendance মেথড lab-এর সাথে বেঁধে দে।
 */

const classroom = {
    name: "নবম শ্রেণী",
    students: ["Rifat", "Sakib", "Tamim", "Musfiq"],
    attendance: function () {
        console.log(`Classroom: ${this.name}, Students: ${this.students.join(", ")}`);
    }
};


classroom.attendance();

const lab = {
    name: "কম্পিউটার ল্যাব",
    students: ["Rahi", "Shuvo", "Joy"]
};

const labAttendance = classroom.attendance.bind(lab);

labAttendance(); 