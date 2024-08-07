// A Leap year is dividible by 4.
// If it is divisible by 100 it must also be divisible by 400 for it to be a leap year.
// If the year is divisible by 4 and not divisible by 100, it is a leap year.
// If the year is divisible by 400, it is a leap year.
// If the year is divisible by 100 but not by 400, it is not a leap year.
// If the year is not divisible by 4, it is not a leap year.
// Below is the implementation. 
const leapYears = function(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
