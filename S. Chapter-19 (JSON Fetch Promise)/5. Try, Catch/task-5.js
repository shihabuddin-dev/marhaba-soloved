/* 
৫. try-catch-finally ব্যবহার করে এমন একটা কোড বানা, যেখানে ইউজারের অ্যাকাউন্ট ডিলিট করার সিমুলেশন হবে। try ব্লকে বলবি "Deleting account" catch ব্লকে বলবি "Failed to delete account", আর finally ব্লকে বলবি "Account deletion attempt finished"।
*/
function deleteAccount(userId) {
    try {
        console.log("Deleting account");
        if (userId === null || userId === undefined) {
            throw new Error("User ID is invalid.");
        }
        console.log("Account deleted successfully.");
    } catch (error) {
        console.error("Failed to delete account:", error.message);
    } finally {
        console.log("Account deletion attempt finished.");
    }
}
deleteAccount(123);