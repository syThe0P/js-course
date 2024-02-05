const marvel_heroes = ["IronMan", "Thor", "Hulk"];
const dc_heroes = ["SuperMan", "Batman", "Flash"];

// marvel_heroes.push(dc_heroes);  //With this operation second array comes inside the first array not by  seperate value
// console.log(marvel_heroes);

//Concat method for mergeing arrays
// const new_Heroes = marvel_heroes.concat(dc_heroes);
// console.log(new_Heroes);   //Now the two arrays are merged together


//Spread Operator is another method to merge array
// const all_heroes = [...marvel_heroes, ...dc_heroes];
// console.log(all_heroes);


//Now when there is array in array and even further array for example below
// const new_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]];

// const real_new_array = new_array.flat(Infinity); //this will make the entire array with single values
// console.log(real_new_array);


// console.log(Array.isArray("Pranav"));  // tells is it an array
// console.log(Array.from("Pranav")) //THIS WILL CONVERT THE STRING TO AN ARRAY


//Now if we have multiple variables and we want to covert it into array;

let score1 = 100;
let score2 = 200;
let score3 = 300;

const all_score = Array.of(score1, score2, score3);
console.log(all_score);