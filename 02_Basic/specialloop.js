// for of loop
// let arr= [1,2,3,4,5,6]
// for(const i of arr){
//     console.log(i)
// }

// const greeting  = "Hello World!"

// for(const greet of greeting){
//     console.log(greet)
// }

const map = new Map()

map.set('In','INDIA')
map.set('USA','United States of America')
map.set('Fr','France')


// Map does not contain duplicate values 

// console.log(map)
// for(const k of map){
//     console.log(k)
// }

// for(const [k,v] of map){
//     console.log(k +" => "+ v)
// }

const obj = {
    username : "Harsh",
    userEmail: "hari@gmail.com"
}

for(const i in obj){
    console.log(obj[i])
    console.log(`The Value of ${i} is ${obj[i]} `)
}


const pro = ["js","rb","py","java","cpp"]

for(const i in pro){
    console.log(i) // it prints the index of arr not the value
    console.log(pro[i]) // here it will print the value
}



