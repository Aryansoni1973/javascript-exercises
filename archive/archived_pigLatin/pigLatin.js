function pigLatin(strings) {
    const words = strings.split(' ');

    const result = words.map((letters) => {
        const newWord = letters.split('');
        let translatedWord;

        if (/^[aeiou]/i.test(letters)) {
            newWord.push("ay");
            translatedWord = newWord.join('');
        } else {
            let consonants = '';
            while (/^[^aeiou]/i.test(newWord[0])) {
                consonants += newWord.shift();
            }
            newWord.push(consonants, "ay");
            translatedWord = newWord.join('');
        }

        return translatedWord;
    }).join(' ');
    return result;
}

// Do not edit below this line
module.exports = pigLatin;
