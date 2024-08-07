const convertToCelsius = function(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return Math.round(celsius * 10) / 10; // Rounding to 1 decimal place
};

const convertToFahrenheit = function(celcius) {
    const fahrenheit = (celsius * (9 / 5)) + 32;
    return Math.round(fahrenheit * 10) / 10; // Rounding to 1 decimal place
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
