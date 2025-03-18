/* 
১. একটা বাক্যে "I bought an orange" লেখা আছে, এখন "orange"-কে "grape" দিয়ে পরিবর্তন কর।
 */
const sentence = "I bought an orange"
const newSentence = sentence.replace(/orange/g, "grape")
console.log(newSentence);