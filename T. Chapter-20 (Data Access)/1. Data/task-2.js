/* 
২. একটা প্রোগ্রাম লিখ, যেখানে const library = { name: 'city library', books: [{ id: 1, title: 'JavaScript Basics', price: 300}, { id: 2, title: 'Python Essentials', price: 500}]} আছে। এবার books array থেকে দ্বিতীয় বইয়ের price বের কর।
 */
const library = {
    name: 'city library',
    books: [
        { id: 1, title: 'JavaScript Basics', price: 300 },
        { id: 2, title: 'Python Essentials', price: 500 }
    ]
}
console.log(library.books[1].price);