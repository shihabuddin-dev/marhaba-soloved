/* ৭. লার্নিং প্লাটফর্মের জন্য courses-এর কিছু ডাটা বানা। সেখানে মিনিমাম 3 টা কোর্স থাকবে। প্রত্যেকটা কোর্সে course title, instructor name, duration এবং lessons (array)। lessons array-তে lesson name, duration এবং difficulty level থাকবে। ডিফিকাল্টি লেভেল বলতে beginner, intermediate, advanced যেকোনো একটা মান হবে। JSON.stringify দিয়ে কনভার্ট কর।
 */
const courses = [
    {
        courseTitle: "Web Development Fundamentals",
        instructorName: "Jhankar Mahbub",
        duration: "8 weeks",
        lessons: [
            {
                lessonName: "Introduction to HTML",
                duration: "1 hour",
                difficultyLevel: "beginner",
            },
            {
                lessonName: "CSS Styling",
                duration: "1.5 hours",
                difficultyLevel: "beginner",
            },
            {
                lessonName: "JavaScript Basics",
                duration: "2 hours",
                difficultyLevel: "intermediate",
            },
        ],
    },
    {
        courseTitle: "Mobile App Development with React Native",
        instructorName: "Gias Uddin",
        duration: "12 weeks",
        lessons: [
            {
                lessonName: "React Native Fundamentals",
                duration: "2 hours",
                difficultyLevel: "beginner",
            },
            {
                lessonName: "Building UI Components",
                duration: "2.5 hours",
                difficultyLevel: "intermediate",
            },
            {
                lessonName: "Navigation and State Management",
                duration: "3 hours",
                difficultyLevel: "advanced",
            },
        ],
    },
    {
        courseTitle: "Backend Development",
        instructorName: "Sahariya",
        duration: "10 weeks",
        lessons: [
            {
                lessonName: "Node.js Fundamentals",
                duration: "2 hours",
                difficultyLevel: "beginner",
            },
            {
                lessonName: "Express.js Framework",
                duration: "2.5 hours",
                difficultyLevel: "intermediate",
            },
            {
                lessonName: "Database Design with MongoDB",
                duration: "3 hours",
                difficultyLevel: "advanced",
            },
        ],
    }
]

const makeJson = JSON.stringify(courses)
console.log(makeJson);