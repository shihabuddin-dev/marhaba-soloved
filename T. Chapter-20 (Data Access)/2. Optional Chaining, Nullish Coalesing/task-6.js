/* 
৬. profile অবজেক্টে social অবজেক্টে twitter নামের প্রোপার্টি চেক কর Optional Chaining দিয়ে। twitter না থাকলে 'Twitter handle not available' প্রিন্ট কর 
*/
const social = {
    facebook: true,
    linkedIn: true,
    instagram: false,
    gitHub: true
}
const twitterHandle = social?.twitter ?? 'Twitter handle not available'
console.log(twitterHandle);