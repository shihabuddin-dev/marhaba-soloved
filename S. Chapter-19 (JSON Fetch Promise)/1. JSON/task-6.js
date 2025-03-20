/* 
৬. এইবার project management system বানা। যেখানে অনেকগুলো প্রজেক্ট থাকবে একটা অ্যারের মধ্যে। প্রত্যেকটা প্রজেক্টের মধ্যে প্রজেক্টে নাম, project description, team members (array), deadlines এবং tasks। প্রতিটি task-এ title, assignee এবং status থাকবে। JSON.stringify দিয়ে কনভার্ট কর।
 */

const projectManagementSystem = [
    {
        projectName: "E-commerce Website",
        projectDescription: "Building an online store for selling products.",
        teamMembers: ["Jhankar", "Gias", "Rokib"],
        deadline: "2024-12-31",
        tasks: [
            {
                title: "Design Homepage",
                assignee: "Jhankar",
                status: "Completed",
            },
            {
                title: "Develop Product Page",
                assignee: "Gias",
                status: "In Progress",
            },
            {
                title: "Implement Payment Gateway",
                assignee: "Rokib",
                status: "To Do",
            },
        ],
    },
    {
        projectName: "Mobile App Development",
        projectDescription: "Creating a mobile app for iOS and Android.",
        teamMembers: ["Awlad", "Jihad", "Shariya"],
        deadline: "2025-06-30",
        tasks: [
            {
                title: "Design UI",
                assignee: "Awlad",
                status: "In Progress",
            },
            {
                title: "Develop Backend API",
                assignee: "Shariya",
                status: "Completed",
            },
            {
                title: "Test App",
                assignee: "Jihad",
                status: "To Do",
            },
        ],
    },
];

const makeJson = JSON.stringify(projectManagementSystem)
console.log(makeJson);