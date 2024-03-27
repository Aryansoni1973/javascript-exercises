// Function to check if a text is a palindrome
const palindromes = function (text) {
    const alphaNumChar = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedText = text
        .toLowerCase()
        .split('')
        .filter(character => alphaNumChar.includes(character))
        .join('');
    const reversedText = cleanedText.split('').reverse().join('');
    return cleanedText === reversedText;
}

// Do not edit below this line
module.exports = palindromes;
