const sumAll = function (start, end) {
    start = Number.parseInt(start);
    end = Number.parseInt(end);
    if (start < 0 || end < 0) {
        return "ERROR";
    }else if (typeof start !== 'number' || typeof end !== 'number' || isNaN(start) || isNaN(end)) {
        return "ERROR";
    }else if (end < start) {
        [start, end] = [end, start];
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
