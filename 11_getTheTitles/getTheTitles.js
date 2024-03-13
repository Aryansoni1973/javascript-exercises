const books = [
    {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford"
    },
    {
        title: "A smart way to learn JavaScript",
        author: "Mark Myers"
    }
];
let titles = [];
const getTheTitles = function() {
    for (let i = 0; i < books.length; i++) {
        titles.push(books[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
