const caesar = function (alphabet, number) {
    let encodedAlphabet = "";
    for (let i = 0; i < alphabet.length; i++) {
        const char = alphabet[i];
        if (/[a-zA-Z]/.test(char)) {
            let shift = number % 26;
            if (shift < 0) { shift += 26; }
            let alphabetCode = char.charCodeAt();
            let caesarCode = alphabetCode + shift;
            if ((char >= 'A' && char <= 'Z' && caesarCode > 90) ||
                (char >= 'a' && char <= 'z' && caesarCode > 122)) {
                caesarCode -= 26;
            }
            encodedAlphabet += String.fromCharCode(caesarCode);
        } else {
            encodedAlphabet += char;
        }
    }
    return encodedAlphabet;
};

// Do not edit below this line
// module.exports = caesar;
