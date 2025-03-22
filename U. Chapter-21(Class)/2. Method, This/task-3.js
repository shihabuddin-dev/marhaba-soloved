/* 
৩. একটা ক্লাস লিখে ফেল, যেটার নাম দিবি Library। এইটার ভিতরে একটা প্রোপার্টি থাকবে books নামে, আর সেই প্রোপার্টির প্রাথমিক মান হবে একটা খালি অ্যারে। এরপর addBook নামে একটা মেথড লিখবি। সে প্যারামিটার হিসেবে একটা বইয়ের নাম নিবে। তারপর books প্রোপার্টিতে সেই বই যোগ করে দিবে। আরেকটা মেথড লিখবে hasBook নামে, সে একটা প্যারামিটার নিবে। প্যারামিটারে থাকবে বইয়ের নাম। সে গিয়ে চেক করবে, যে নাম দিয়ে বই খুঁজতেছস, সেই বই যদি books প্রোপার্টিতে থাকে, তাহলে সে true রিটার্ন করবে। আর না থাকলে সে false রিটার্ন করবে।
 */
class Library {
    constructor() {
        this.books = []
    }
    addBooks(bookName) {
        this.books.push(bookName)
    }
    hasBook(bookName) {
        return this.books.includes(bookName)
    }
}
const singleLibrary = new Library()
singleLibrary.addBooks('Recharge Your Down Battery')
singleLibrary.addBooks('Marhaba JS A Mari Thaba')

console.log(singleLibrary.hasBook('Recharge Your Down Battery'));
console.log(singleLibrary.hasBook('Marhaba JS A Mari Thaba'));