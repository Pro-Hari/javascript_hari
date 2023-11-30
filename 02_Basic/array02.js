
const marvel_hero = ["thor","Ironman","spiderman"]

const dc_heros = ["batman","superman","flash"]

// marvel_hero.push(dc_heros) //[ 'thor', 'Ironman', 'spiderman', [ 'batman', 'superman', 'flash' ] ]

const arr = marvel_hero.concat(dc_heros) // 
// console.log(marvel_hero)

const arrr = [...marvel_hero,...dc_heros] // spread Operator
console.log(arrr);

const another = [1,2,3,[4,5],6,7,[4,6,7,[54]]]

console.log(another.flat(Infinity))

console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh"));

// it will not convert object into Arrays that is
//console.log(Array.from({name:"Harsh"}))

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3))