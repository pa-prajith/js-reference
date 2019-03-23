// Different type of FOR loop
// Reference - https://flaviocopes.com/javascript-loops/

const list = ['a', 'b', 'c'];

// 1. for

for (let i = 0; i < list.length; i++) {
  console.log(`FOR - Index is ${i} and the value is ${list[i]}`);
}

// 2. forEach
/*
    Advantage of forEach over for - .forEach() you pass an individual function with it’s own scope. In a for loop you’re polluting whatever scope you place the loop in. 
*/
list.forEach((item, index) => {
    console.log(`FOREACH - Index is ${index} and the value is ${item}`);
})

//index is optional
list.forEach(item => console.log(`FOREACH - Displays only the value - ${item}`));

// 3. for...in
// Basically used to iterate through an object
// Iterates through Property names

for (let property in list) {
    console.log(`FOR-IN - Index is ${property} and the value is ${list[property]}`);
}

// 4. for...of
// Iterates through Property Values

//iterate over the value
for (const value of ['a', 'b', 'c']) {
    console.log(console.log(`FOR-OF - Displays only the value - ${value}`))
}
  
//get the index as well, using `entries()`
for (const [index, value] of ['a', 'b', 'c'].entries()) {
    console.log(`FOR-OF - Index is ${index} and the value is ${value}`);
}


