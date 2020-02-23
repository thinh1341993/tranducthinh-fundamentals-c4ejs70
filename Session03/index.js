// let t = Math.floor(Math.random() * 100)
// console.log(t)
// while (true){
//     let i = Number(prompt())
//     if(i<t){
//         console.log("too small")
//     } else if(i>t) {
//         console.log("too big")
//     }
//     else {
//     console.log(t)   
//         break
//     }  
// }

let userinput=Number(prompt('nhap'))
let isprime = true
if(userinput<2){
    isprime=false
}
for (let i=2;i <= Math.sqrt(userinput);i++){
    if(userinput % i == 0){
        isprime = false
        break
    }
}
if(isprime){
    console.log(`${userinput} is prime`)
} else {
    console.log(`${userinput} is't prime`)
}