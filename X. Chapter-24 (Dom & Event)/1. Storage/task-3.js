/* 
৩. Session Storage ব্যবহার করে ইউজারের লগইন টোকেন সেভ কর। টোকেনের নাম দে userToken এবং ভ্যালু দে abcd1234 পরে সেটা বের করে কনসোল লগ করে দেখা।
 */
sessionStorage.setItem('userToken', 'abcd1234')
console.log(sessionStorage.getItem('userToken'));