/* 
8. 'https://jsonplaceholder.typicode.com/posts?userId=1' থেকে তার সব পোস্ট লোড কর। দুইভাবে কর। প্রথমবার callback স্টাইলে আর পরেরবার async-await দিয়ে।
 */

// callback style 
function getPosts(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => response.json())
        .then(posts => callback(null, posts))
        .catch(error => callback(error, null));
}

getPosts(function (error, posts) {
    if (error) {
        console.error('Error fetching posts:', error);
    } else {
        console.log('Posts loaded:', posts);
    }
});


// async await style 
async function getPostsAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        const posts = await response.json();
        console.log('Posts loaded:', posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

getPostsAsync();
