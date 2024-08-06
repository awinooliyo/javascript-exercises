const removeFromArray = function(array, ...args) {
    // Create a new empty array
    const newArray = [];
    // Loop through the new array with for each
    array.forEach((item) => {
      // Push every element into the array
      // Unless the element is in the args
      // Create a new array with new items except those to be removed
      if (!args.includes(item)) {
          newArray.push(item);
      }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
