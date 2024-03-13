const convertToCelsius = function(fahrenheit) {
  fahrenheit = Number.parseInt(fahrenheit);
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  celsius = parseFloat(celsius);
  return Math.round(((celsius * 9 / 5) + 32) * 10) / 10;
};

console.log(convertToFahrenheit(-10))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
