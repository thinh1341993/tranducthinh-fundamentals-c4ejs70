let menu = ['canh ngao','thit ga']
console.log(menu)

// create
menu.push('hambuger')
console.log(menu)

// read
// để đọc 1 phần tử trong mảng thì sẽ phải đọc bằng chỉ số index

console.log(menu[2])

// đọc tất cả phần tử trong Array
// for(i=0;i<3;i++){
//     console.log(menu[i])
// }
// console.log(menu.length)
// // for(i=0;i<menu.length;i++){
// //     console.log(menu[i])
// // }
menu.forEach((value,index)=>{
    console.log(index,value)
}
)

// update

menu[2]='thit cho'
console.log(menu)

let i=menu.indexOf('canh ngao')
console.log(i)

// delete

menu.splice(1,2)
console.log(menu)