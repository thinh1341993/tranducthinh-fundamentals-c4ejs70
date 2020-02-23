// ICRUD
// Initial
// let person = {
//     name: 'Hoang Viet',
//     age: 20,
//     job: 'student',
//     location: 'Hanoi',
//     status: 'single',
//     ex:3,

// }
// console.log(person)

// // read
// console.log(person.age)

// // update
// person.status = 'in relation ship with code'
// console.log(person)

// // create
// person.hobby = 'playboy'
// console.log(person)

// // delete

// delete person.ex
// console.log(person)

// let person = {
//     name: 'Duc Thinh',
//     age: 28,
//     job: 'coder',
//     location: 'Hanoi',
// }
// console.log(Object.keys(person))
// while(true){
//     let k = prompt('nhap key')
//     if(person[k]){
//         console.log(person[k])
//         break
//     }
//     else {
//         console.log('ko co trong du lieu')}
//     }

//     let k_u = prompt('nhap key ban  muon update')
//     if(person[k_u]){
//         person[k_u]= prompt('nhap value moi')
//         console.log(person[k_u])
//     }
//     else{console.log('ko co trong du lieu')}

// person[prompt('nhap key muon them moi')] = prompt('nhap value moi')
// console.log(person)

// let xoa = prompt('nhap key ban muon xoa')
// if(person[xoa]){
//     delete person[xoa]
//     console.log(person)
// }
// else {console.log('ko co trong du lieu')}

// let dictionary = {
//     name: 'thinh',
//     age: 20,
// }

// let keys = Object.keys(dictionary)
// keys.forEach((value, index) => {
//     console.log(`${index + 1}. ${value}`)
// })
// loop = true
// while (loop) {
//     let userinput = prompt('enter y word, press e to exit')
//     if (userinput in dictionary) {
//         console.log(dictionary[userinput])
//     } else if (userinput === 'E') {
//         loop = false
//     } else {
//         let createNewWord = prompt('do y wanna create a new word (Y,N)').toUpperCase()
//         if (createNewWord === 'Y') {
//             dictionary[userinput] = prompt('enter the meaning')
//             keys = Object.keys(dictionary)
//             keys.forEach((value, index) => {
//                 console.log(`${index + 1}. ${value}`)
//             })
//         } else if (createNewWord === 'N') {
//             alert('thank y')
//         } else {
//             alert('wrong syntax')
//         }
//     }
// }

// let array = [{
//     name: 'viet',
//     days: 30,
//     hours: 8,
//     price: 50000
// },{
//     name: 'hung',
//     days: 30,
//     hours: 6,
//     price: 50000   
// },{
//     name: 'thinh',
//     days: 25,
//     hours: 12,
//     price: 30000
// },{
//     name: 'binh',
//     days: 20,
//     hours: 5,
//     price: 100000
// }]
//  sum = 0
// array.forEach(value =>{
//     console.log(`${value.name} luong thang: ${value.days * value.hours * value.price}`)
//     sum += value.days * value.hours * value.price
// })
// console.log(sum)
