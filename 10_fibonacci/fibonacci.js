// Fibonacci sequence up to a given number
const fibonacci = function (number) {
    if (number === 0 || number === 1) return number;
    if (number < 0) return "OOPS";
    let fibPrev = 0, fibCurr = 1;
    for (let i = 2; i <= number; i++) {
        let temp = fibCurr;
        fibCurr += fibPrev;
        fibPrev = temp;
    }
    return fibCurr;
}

// Do not edit below this line
module.exports = fibonacci;
