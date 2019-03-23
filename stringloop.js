var text = 'uololooo';

// With ES6
[...text].forEach(c => console.log('From forEach -1' ,c));

// With the `of` operator
for (const c of text) {
    console.log('From FOR-OF ', c);
}

// With ES5
for (var x = 0, c=''; c = text.charAt(x); x++) { 
    console.log('From FOR - ', c); 
}

// ES5 without the for loop:
text.split('').forEach(function(c) {
    console.log('From forEach -2' ,c);
});

// Map
text.split('').map(function(letter) {
    console.log('From MAP ' ,letter);
});