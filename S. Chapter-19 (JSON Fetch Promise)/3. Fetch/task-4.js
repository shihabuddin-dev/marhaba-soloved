/* 
৪. একটা API কল লিখে ফেল। যেটা 'https://jsonplaceholder.typicode.com/users' থেকে ইউজার লিস্ট লোড করবে
 */

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => console.log(users))
    .catch(error => console.log(error))