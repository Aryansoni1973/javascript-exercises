const palindromes = function (word) {
    let cleanWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let mainWord = cleanWord.split('');
    let compareWord = mainWord.slice().reverse();
    let result;
    if (mainWord.toString() === compareWord.toString()) {
        result = true;
    }else {
        result = false;
    }
    return result;
}

// Do not edit below this line
module.exports = palindromes;
