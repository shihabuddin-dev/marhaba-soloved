/* 
8. stringOnlyParser ফাংশনে চেক কর। ইনপুট null বা empty string বা undefined হলে বলবি "Input must be a String."
 */
const stringOnlyParser = (input) => {
    if (input === null || input === '' || input === undefined) {
        return ("Input must be a String.");
    }
    return ('Input is a valid string');

}
console.log(stringOnlyParser(''));