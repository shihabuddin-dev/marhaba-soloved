/* 
৫. fetch প্র্যাকটিস করে ফেল 'https://jsonplaceholder.typicode.com/users/1' এই ইউজার থেকে ডাটা লোড করার জন্য 
*/
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))