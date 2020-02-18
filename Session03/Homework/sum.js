// 5.calculate the sum of the numbers
// var a = prompt('Enter a squence of Number, separated by commas (,)');
// var x = [];
// x = a.split(',')
// x = x.map(Number)
// alert('The sum of them is ' + x.reduce((ac,cu)=>ac+cu))

// 6.Find the smallest number
// var a = prompt('Enter a squence of Number, separated by commas ","');
// var x = [];
// x = a.split(',')
// x = x.map(Number)
// alert('The smallest number is ' + Math.min(...x))

// 7.search number in the array
// const arr = [3, 4, 6, -9, 10, -88, 2]
// while(true){
//     let nhap = Number(prompt('Enter the number'))
//     let c = true
// for(let i=0; i < arr.length; i++){
//     if(arr[i]==nhap) {
//         c = false
//         break
//     }
//     }
//     if(c){
//     alert(nhap +' is not found in my array')}
//     else {
//         alert(nhap +' is found in my array at index'+ arr.indexOf(nhap))}
// }

// 8.You are a shepherd who owns a flock of 

// let sizes = [5,7,300,90,24,50,75]
// alert('Hello, my name is Phuong Nam and here is my sheep sizes:' +'\n'+sizes.join(' '))
// alert('Now my biggest sheep has size '+ Math.max(...sizes)+", let's shave it")
// sizes[sizes.indexOf(Math.max(...sizes))] = 8
// alert('After shearing, here is my flock' +'\n'+sizes.join(' '))
// for(j=1;j<4;j++){
// for(i=0;i<sizes.length;i++){
//     sizes[i] = sizes[i] + 50
// }
// alert('Month '+j+'\n'+'One month has, passed, my sheeps have grown, here are their sizes'+'\n'+sizes)
// }
// let total = sizes.reduce((ac,cu)=>ac+cu)
// alert('My flock has size in total: '+total+'\n'+'I would get '+total+'*2$ ='+total*2)


// 9.Turtle exercices
// clear()
// const colors = ['red', 'gray', 'blue', 'purple', 'cyan']
// let a = 10
// for(j=0;j<5;j++){
//   color(colors[j])
// for(i=0;i<4;i++){
//   fd(a)
//   rt(90)}
//   a = a + 10}
  
// 10.new array each surrounded with <>
// let ten = prompt('Enter a sequeence of names')
// let array = ten.split(',')
// let new_array = array.map(x => '<'+x+'>')
// alert(new_array)

// 11.new array containing only the odd Numbers
let number = prompt('Enter a sequeence number')
let array = number.split(',')
let new_array = array.filter(x=> x % 2 !== 0)
alert(new_array)