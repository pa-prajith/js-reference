// Differnce between arrayForEach and Map
/*

forEach() — executes a provided function once for each array element.
the forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.

map() — creates a new array with the results of calling a provided function on every element in the calling array.
the forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element in your array. This callback is allowed to mutate the calling array.

*/

// Map
/*
    map() -Translate/map all elements in an array to another set of values.
    array.map(function(elem, index, array) {
      ...
    }, thisArg);
    -- thisArg	(Optional) object that will be referred to as this in callback
*/

var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var celcius = fahrenheit.map(function(elem) {
    return Math.round((elem - 32) * 5 / 9);
}); 

// ES6
// fahrenheit.map(elem => Math.round((elem - 32) * 5 / 9));
console.log('map() - ',celcius);


// Filter
/*
    filter() - remove unwanted elements based on a condition.
    array.filter(function(elem, index, array) {
      ...
    }, thisArg);
    -- thisArg	(Optional) object that will be referred to as this in callback
*/

let arr = [1,2,3,4,5,6,7,1,4,7,3,4,1,8];
let uniqueArray = arr.filter(function(elem, index, array) {
    return array.indexOf(elem) === index;
}
);

// ES6
// array.filter((elem, index, arr) => arr.indexOf(elem) === index);
console.log('filter() - ', uniqueArray);

// Reduce
/*
    reduce() - find a cumulative or concatenated value based on elements across the array
    array.reduce(function(prevVal, elem, index, array) {
      ...
    }, initialValue);
    -- prevValue - cumulative value returned thru each callback
    -- initialValue - (Optional) object used as first argument in the first (leftmost) callback.
*/

const rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];

let sum = rockets.reduce(function(prevVal, elem) {
    return prevVal + elem.launches;
}, 0);

// ES6
// rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0); 
console.log('reduce() - ', sum);

//Every
/*
    every() - single boolean value from multiple elements in an array. Returns true if all element satisfies condition

*/

let sampleArray = [ 1, 2, 3, 4, 5 ];
let sampleArray2 = [ 0, -1, -30, 5];
function tester(number){
  return number > 0;
}
// ES6
// sampleArray.every( number => number > 0 );
// sampleArray2.every( number => number > 0 );
console.log('every()',sampleArray.every(tester));
console.log('every()',sampleArray2.every(tester));

// FindIndex
/*
    findIndex()- returns index of the first element in a given array that satisfies the provided testing function. Otherwise -1 is returned
    array.findIndex(function(currentValue, index, arr), thisValue)

*/

function isOdd(element, index, array) {
    return (element%2 == 1);
  }
  
console.log('findIndex()', [4, 6, 7, 12].findIndex(isOdd)); 