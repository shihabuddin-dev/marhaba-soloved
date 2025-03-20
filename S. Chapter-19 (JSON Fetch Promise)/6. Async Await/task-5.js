/* 
৫. async-await দিয়ে একটা ফাংশন লিখ, যা 'https://jsonplaceholder.typicode.com/comments' থেকে কমেন্ট লোড করবে। অবশ্যই try-catch-finally ইউজ করবি এবং finally-তে একটা console.log দে, 'Request completed!'
 */
async function fetchComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const comments = await response.json();
        console.log(comments);
    } catch (error) {
        console.error('Error fetching comments:', error);
    } finally {
        console.log('Request completed!');
    }
}

fetchComments();