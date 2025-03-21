/* 
৪. ধর, একটা অবজেক্ট আছে, const shop = { items: [{ name: 'pen', stock: 100}, { name: 'notebook', stock: 50}] } items array থেকে notebook-এর stock বের করতে চাস, তাহলে একটা প্রোগ্রাম লিখে বের কর।
 */
const shop = {
    items: [
        { name: 'pen', stock: 100 },
        { name: 'notebook', stock: 50 }
    ]
}
console.log(shop.items[1].stock);