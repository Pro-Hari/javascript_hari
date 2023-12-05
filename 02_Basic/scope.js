 
// var c = 300 it get changed if we print the value of c after the if condition
let b = 200
if(true){
    const a=10
    var c = 30
    let b =20
    console.log(b)
}

// console.log(a) // It will give error because the a in declare in a if block 
//console.log(b) // It will give an error because of scope is in if block only as it is declared with let keyword
// console.log(c) // It will give value as is is defined as var keyword which is having scope in a whole code 

console.log(b)

function one(){
    const username="Harsh"
    
    function two(){
        const web = "Youtube"
        console.log(username)
    }
    // console.log(web)
    two()
}
// one()

if(true){
    const username = "Harsh"
    if(username === "Harsh"){
        const website = "Youtube"
        console.log(username + " " +website)
    }
    // console.log(website)// It cannot be executed
}
// console.log(username) // It cannot be executed


// ******************* Interesting ****************

function addOne(val){
    return val+1
}

console.log(addOne(6))


// addTwo(5) it cannot be executed because of function expression 
//that is if we declare a function in a variable then it should be called after the function declaration


// const addTwo = function(n){
//     return n+2
// }
