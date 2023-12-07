const myArrr= ["Spiderman","Flash","Superman","Batman"]

// myArrr.forEach(function(i){
//     console.log(i)
// })

// myArrr.forEach((item)=> console.log(item))

// function printMe(item){
//     console.log(item)
// }

// myArrr.forEach(printMe)

// myArrr.forEach((item,i,a) =>{
//     console.log(item,i,a)
// })



const arr = [
    {
        username:"Harsh",
        pro:"java"
    },
    {
        username:"Hari",
        pro:"js"
    },
    {
        username:"Hars",
        pro:"ruby"
    }
]

arr.forEach((item) =>{
    console.log(item.username)
    console.log(item.pro)
})