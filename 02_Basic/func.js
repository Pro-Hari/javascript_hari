// function myFun(){
//     console.log('H')
//     console.log('A')
//     console.log('R')
//     console.log('S')
//     console.log('H')
// }myFun()

// function addTwo(a+b){
//     console.log(a+b)
// }
function addTwo(a,b){ // parameters
    console.log("Harsh: ")
    return a+b
    // console.log("Agarwal") It cannnot be executed because after return statement the func other declare doesnot work
}

// const af= addTwo(4,9) // arguments
// console.log(af)


function logInUser(username = "Sam"){//By default the value will be sam
    if(!username){
        return "Please Enter the UserName"
    }
    return `Hello ${username},You Just Logged In`
}
// const s = logInUser("Harsh")
// console.log(s)

// console.log(logInUser())
console.log(logInUser("Hari"))


function calculateCartPrice(val1,val2,...a){ //rest operator 
    return a
}

// console.log(calculateCartPrice(200,300,500,2000));

const users= {
    username:"Harsh Agarwal",
    price:190
}


function handObject(anyObject){
    console.log(`UserName is ${anyObject.username} and price is ${anyObject.price}`)
}

// handObject(users)
// handObject({
//     username:"Harsh",
//     price:890
// })

const myArr = [200,400,600,100,800]

function secondValue(getArray){
    return getArray[1]
}

console.log(secondValue(myArr))
