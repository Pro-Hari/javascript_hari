//Loops 

//for loop

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         // console.log(`${i} * ${j} = ${i*j}`)
//         console.log(i + " * "+ j + " = "+ i*j)
//     }
// }


let myArr = ["Batman","Spiderman","Superman"]

for(let i=0;i<myArr.length;i++){
    console.log(myArr[i])
}

for(let i=1;i<=10;i++){
    if( i == 5){
        console.log("Detected")
        continue;
    }
    console.log(i)
}

