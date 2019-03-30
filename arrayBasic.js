
// Create an array
let arr = ["A","B","C","D","E","F","G","H"];
cl(arr);

// Adding Element to last - push
// arr.push("P1","P2");
// cl(arr);

// Removing last Element pop
// arr.pop();
// cl(arr);

// Return value of pop - last element
// let popVal = arr.pop();
// cl("popVal " + popVal);

// Adding element to first --unshift
// arr.unshift("s1","s2");
// cl(arr);

// Removing element from first index - shift
// arr.shift();
// cl(arr);

// Return value of the shift - removed element
// var shiftVal = arr.shift();
// cl("shiftVal " +shiftVal);

// splice() -change the element of array
// splice(startIndex, numOfElements, <optional Replace value>)
// Returns a new array with removed element
// let retarr = arr.splice(3,5,"R1","R2");
// cl(arr);
// cl(retarr);

// specify 0 as the number of items to remove to simply add new items at the specified location in the array
// arr.splice(2,0,"B1");
// cl(arr);

// slice method returns a new array with a copied slice from the original array. The first optional argument is the beginning index and the second optional argument is the ending index (non-inclusive)
// create a deep copy of the array
// let newArr = arr.slice();
// console.log(arr, newArr);
// arr[3] ="4";
// console.log(arr, newArr);

const myArr = ['1', '2', '3', '4'];

// const myArrCopy = myArr.slice(1);
// const myArrCopy1 = myArr.slice(1,0);
// const myArrCopy2 = myArr.slice(1,1);
// const myArrCopy3 = myArr.slice(1,3);

// Note that second argument is  the ending Index

// const myArrCopy = myArr.slice(2);
// const myArrCopy1 = myArr.slice(2,0);
// const myArrCopy2 = myArr.slice(2,1);
// const myArrCopy3 = myArr.slice(2,3);

// console.log(myArrCopy);
// console.log(myArrCopy1);
// console.log(myArrCopy2);
// console.log(myArrCopy3);

// let arr = ["A","B","C","D","E","F","G","H"];
// let val = arr.shift();
// cl(val);












function cl(val) {
    console.log(val);
}