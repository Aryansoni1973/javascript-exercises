const removeFromArray = function(arr, ...values) {
    return arr.filter((element) => {
        return !values.includes(element);
    });
};
console.log(removeFromArray([1, 1, 2, 2, "hey", 3], 1, "2", "hey", 3));
// Do not edit below this line
module.exports = removeFromArray;
