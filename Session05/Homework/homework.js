// 1.
// const hello = ()=>{
//     console.log('hello world')
//     console.log('hello world')
//     console.log('hello world')
// }
// hello()

// 2.
// let sum = (a,b)=>{
//     s = a+b
//     console.log(s)
// }
// sum(1,2)

// 3.
// const draw_square = (length, color1) => {
//     for (let i = 0; i < 4; i++) {
//         color(color1)
//         fd(length)
//         rt(90)
//     }
// }
// draw_square(100, 'red')

// 4.
// clear()
// const draw_square = (length, color1) => {
//     for (let j = 0; j < 4; j++) {
//         color(color1)
//         fd(length)
//         rt(90)
//     }
// }
// for (let i = 0; i < 30; i++) {
//     draw_square(i * 5, 'red')
//     lt(17)
//     penup()
//     fd(i * 2)
//     pendown()
// }

// 5.
// clear()
// const draw_star = (length) => {
//     rt(18)
//     for (let i = 0; i < 5; i++) {
//         fd(length)
//         rt(144)
//     }
// }
// draw_star(100)

// 6.
// const remove_dollar_sign = (s) => {
//     for (i = 0; i <= s.length; i++) {
//         s = s.replace('$', '')
//     } return s
// }
// // console.log(remove_dollar_sign('$ thinh $'))

// 7.
// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
// if (string_with_no_dollars == "80% percent of life is to show up"){
//    console.log("Your function is correct")}
// else{
//    console.log("Oops, there's a bug")}

// 8.
// const get_even_list = (l) => {
//     e = []
//     l.forEach(value => {
//         if (value % 2 == 0) {
//             e.push(value)
//         }
//     })
//     return e
// }
// // get_even_list([1, 4, 5, -1, 10])
// // console.log(e)

// // 9.
// even_list = get_even_list([1, 2, 5, 9, -10, 6])
// if (JSON.stringify(even_list) == JSON.stringify([2, -10, 6])){
//     console.log("Your function is correct")
// }
// else {
//     console.log("Ooops, bugs detected")
// }

// 10.
// const is_inside = (a, b) => {
//     if ((a[0] <= (b[2] + b[0]) && a[0] >= b[0]) && (a[1] <= (b[1] + b[3]) && a[1] >= b[1])) {
//         return true
//     } else {
//         return false
//     }
// }

// // 11.
// if (is_inside([200, 60], [140, 60, 100, 200]) && is_inside([160, 120], [140, 60, 100, 200])){
//     console.log("Your function is correct")
// } else {
//     console.log("Ooops, bugs detected")
// }
