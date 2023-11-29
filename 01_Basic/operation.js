let v = 3
let negval = -v
console.log(negval) //  -3


console.log(2%3)
console.log(2**3)

console.log(+true)  // 0
console.log(3+4*5%3) // 5

console.log("1" + 2)
console.log(2 + "2")

console.log("2" + 3+4)
console.log(3+4+"4") // not a good practice


//Comparison

console.log("2" > 1)
console.log("02" > 1)
//don't do the different datatype comparison

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null>= 0) // true

/*
The reason is that an equality cheack == and comparison <,>,<=,>= work differently
Comparsions convert null to a number, treating as it is 0
That is Why null >= 0 is true and null > 0 is false
*/


console.log("2" == 2) // true
console.log("2" === 2) // false




