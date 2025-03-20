/* 
৫. সিনেমার জন্য movie-এর ডিটেইল থাকবে। যেমন title, release year, actors এবং ratings , actors একটা array হবে (যেখানে actor দের নাম থাকবে) এবং ratings একটা number। তারপর JSON.stringify দিয়ে কনভার্ট কর। কনভার্ট করার পর সেটাকে আবার জাভাস্ক্রিপ্ট অবজেক্টে কনভার্ট কর।
 */
const movie = {
    title: "Inception",
    releaseYear: 2010,
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    ratings: 8.8
};
const makeJson = JSON.stringify(movie)
console.log(makeJson);