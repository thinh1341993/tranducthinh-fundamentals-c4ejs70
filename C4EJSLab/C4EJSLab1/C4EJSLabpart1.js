// EX1
// console.log(Math.random())

// EX2
// Array = [2, 5, 6, 9, 10]
// console.log(Array[Math.floor(Math.random()*Array.length)])

// EX3
// quiz = {
//     question: 'Ngày quốc tế phụ nữ là ngày nào',
//     choice: ['8/3','20/10','20/11','14/2'],
//     rightchoice: '8/3'
// }

// EX4.
// let quiz = [{
//     question: 'Which fictional detective lived at 221b baker street?',
//     choice: ['Watson', 'Sam Spade', 'Scubidu', 'Sherlock Holmes'],
//     rightchoice: 'Scubidu'
// }, {
//     question: 'What sweet food made by bees using nectar from flowers?',
//     choice: ['Bread', 'Honey', 'Sugar', 'Potent'],
//     rightchoice: 'Sugar'
// }]

// let random = Math.floor(Math.random()*quiz.length)

// let answer1 = prompt(`${quiz[random].question}
// 1. ${quiz[random].choice[0]}
// 2. ${quiz[random].choice[1]}
// 3. ${quiz[random].choice[2]}
// 4. ${quiz[random].choice[3]}`)

// EX5.
// let quiz = [{
//     question: 'How many legs do an optopus has?',
//     choice: ['4 leg', 'no legs', '8 legs', '2 legs'],
//     rightchoice: '8 legs'
// }, {
//     question: 'Which country is home to the kangaroo?',
//     choice: ['Australia', 'Autria', 'Nez Zealand', 'US'],
//     rightchoice: 'Australia'
// }]

// let answer1 = prompt(`${quiz[0].question}
// 1. ${quiz[0].choice[0]}
// 2. ${quiz[0].choice[1]}
// 3. ${quiz[0].choice[2]}
// 4. ${quiz[0].choice[3]}`)

// if (quiz[0].choice[answer1 - 1] == quiz[0].rightchoice) {
//     alert('Bravo!!!')
// } else {
//     alert('Good luck next time')
// }

// let answer2 = prompt(`${quiz[1].question}
// 1. ${quiz[1].choice[0]}
// 2. ${quiz[1].choice[1]}
// 3. ${quiz[1].choice[2]}
// 4. ${quiz[1].choice[3]}`)

// if (quiz[1].choice[answer1 - 1] == quiz[1].rightchoice) {
//     alert('Bravo!!!')
// } else {
//     alert('Good luck next time')
// }


// EX6.
// let quiz = [{
//     question: 'Which fictional detective lived at 221b baker street?',
//     choice: ['Watson', 'Sam Spade', 'Scubidu', 'Sherlock Holmes'],
//     rightchoice: 'Scubidu'
// }, {
//     question: 'What sweet food made by bees using nectar from flowers?',
//     choice: ['Bread', 'Honey', 'Sugar', 'Potent'],
//     rightchoice: 'Sugar'
// }, {
//     question: 'How many legs do an optopus has?',
//     choice: ['4 leg', 'no legs', '8 legs', '2 legs'],
//     rightchoice: '8 legs'
// }, {
//     question: 'Which country is home to the kangaroo?',
//     choice: ['Australia', 'Autria', 'Nez Zealand', 'US'],
//     rightchoice: 'Australia'
// }]
// const randomarray = (array) => {
//     let new_array = []
//     let i = array.length
//     while (i--) {
//         new_array.push(array.splice(Math.floor(Math.random() * array.length), 1)[0])
//     }
//     return new_array
// }

// let randomquiz = randomarray(quiz)
// let scores = 0
// let j = randomquiz.length
// while (j--) {
//     let ranchoi = randomarray(randomquiz[j].choice)
//     let answer = prompt(`${randomquiz[j].question}
//     1. ${ranchoi[0]}
//     2. ${ranchoi[1]}
//     3. ${ranchoi[2]}
//     4. ${ranchoi[3]}`)
//     if (ranchoi[answer - 1] == randomquiz[j].rightchoice) {
//         scores = scores + 1
//     }
//     if (j == 0) {
//         alert('We are out of question')
//         alert(`You answered correctly ${scores} of ${randomquiz.length} questions`)
//     }
// }