/* 
৩. "I am eating apple. apple is good. apple helps me a lot." এখানে "apple" শব্দটি পুরো টেক্সটের মধ্যে সব জায়গায় "JavaScript" দিয়ে পরিবর্তন কর। g ফ্ল্যাগের মাধ্যমে পুরো টেক্সটের সব চেইঞ্জ কর 
*/
const sentence = "I am eating apple. apple is good. apple helps me a lot."
const replaceSentence = sentence.replace(/apple/g, "JavaScript")
console.log(replaceSentence);