//If ELSE Statement

if(true){
    console.log("Welcome to Revision")
}else{
    console.log("Good Night")
}

const balance = 700

// if(balance > 500) console.log("Less Than 500"), console.log("HII")
// Not a good practice to write the code in above format

// if(balance < 500){
//     console.log("Less Than 500")
// }else if(balance < 900){
//     console.log("less than 900")
// }
// else{
//     console.log("Less than 1000")
// }

// const userLoggedIn = true;
// const debitCard = true

// if(userLoggedIn && debitCard){
//     console.log("U can go for online shopping")
// }



// ******************** Switch Case ***********************



// const mon = "feb"

// switch(mon){
//     case 'jan':
//         console.log("January")
//         break;
//     case 'feb':
//         console.log("February")
//         break;
//     case 'mar':
//         console.log("March")
//         break;
    
//     default:
//         console.log("Default")
// }


const userEmail = "hari@gmail.com"

if("0"){
    console.log("Got user email")
}
else{
    console.log("Dont get user email")
}

//falsy values => false,"",0,-0,0n,null,undefined, NaN

//truely valuse => true,[],{},1,"0","fd"," ",function(){}


const obj = {}

if(Object.keys(obj).length == 0){
    console.log("Obj Is Empty")
}


// ******** NUllish Coalescing Operator (??)

let val = null??10
let val1 = undefined ?? 3
let val3 = 3??5

// console.log(val)
// console.log(val1)
// console.log(val3)


// ********* Ternary Operator *******

const ice = 4

ice >= 10?console.log("greater"):console.log("Lesser")
