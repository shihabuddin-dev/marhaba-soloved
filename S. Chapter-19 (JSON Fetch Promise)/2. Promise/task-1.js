/* 
১. একটা প্রমিজ লিখে ফেল। এই প্রমিজ যখন resolve করবে, তখন রিটার্ন হিসেবে একটা অ্যারে পাবে, সেখানে অনেকগুলো ইউজারের নাম থাকবে। আর যদি reject করে, তখন রিটার্ন করে, কোন ইউজারের ডাটা নাই।
 */
const getUsers = new Promise((resolve, reject) => {
    const users = ["Shihab", "Omar", "Siam"];
    if (users.length > 0) resolve(users);
    else reject("কোন ইউজারের ডাটা নাই")
});
getUsers
    .then((users) => {
        console.log(users)
    })
    .catch((error) => console.error(error))