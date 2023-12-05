//Singleton

//object literals

const mySym = Symbol("Abc")
const JsUser = {
    name:"Harsh", 
    [mySym]:"hhh",
    age:45,
    "fullname":"Harsh Agarwal",
    location:"agra",
    email:"hari@gmail.com",
    lastLogIn:["monday","saturday"]
   
} 

// console.log(JsUser)

//We can access the object element in two ways.
// console.log(JsUser.lastLogIn);
// console.log(JsUser["lastLogIn"]);
// console.log(JsUser["fullname"]);

console.log(typeof JsUser.mySym)
console.log(JsUser[mySym]);

JsUser.email = "harsh@gmail.com";
console.log(JsUser.email)


// Object.freeze(JsUser) it is used to freeze the obj that is there is no change in it.
JsUser.age = 56
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("JsUserHello")
}

console.log(JsUser.greeting)

JsUser.greetingtwo = function(){
    console.log(`Hello Js User , ${this.name}`)
}

JsUser.greetingtwo()

console.log(JsUser)