//Using Constructor
const tinderUser = new Object()

tinderUser.id = "2124"
tinderUser.name= "Harsh"

tinderUser.location = "Agra"

// console.log(tinderUser);

const reg = {
    email:"Harrr@gmail.com",
    fullname:{
        UserName:{
            firstname:"Harsh",
            lastname:"Agarwal"
        },
        lastUser:{
            firstname:"varun",
            lastname:"aar"
        }
    }
}
// console.log(reg.fullname.lastUser.lastname)

// const bj = Object.assign({},tinderUser,reg) // to add two obj into one we use assign() method
// console.log(bj)
// console.log(tinderUser)


const obj3 = {...tinderUser,...reg} //using spread Operator

console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('id'))

const course= {
    coursename: "JS User",
    price:"6564",
    courseInstr:"Harsh"
}

const {courseInstr:Instr}  = course // de-structure of object 

console.log(Instr)

