
// DATA TYPES AND VARIABLES

// console.log("Hello World!")

// let fullName = "Nicholas Loperena"
// let celsius = 10;
// let fahrenheit = celsius * 1.8 + 32;

// console.log(fahrenheit)

// let cash = 45;
// let price = 40;
// let isStoreOpen = true;
// let difference = cash - price

// if (cash >= price) {
//     console.log(`you paid extra - here's ${difference} your change`)
// }
// else if (cash === price) {
//     console.log("you paid the exact amount, have a nice day!")
// }
// else {
//     console.log(`not enough money - you still owe ${difference * -1} dollars`)
// }


// CONDITIONALS

// let hot = true
// hot ? console.log("weather is hot outside") : console.log("weather is cold")

// let subscribed = true
// let loggedIn = true

// let str = subscribed || loggedIn ? "show the video" : "hide the video"
// console.log(str);

// let receipt = isStoreOpen && (cash >= price) ? "give receipt" : "do not give receipt"
// console.log(receipt)


// LOOPS

// // let count = 1;
// // while (count <=100) {
// //     console.log(count)
// //     count = count +1
// // }

// // for (let i = 0; i < 3; i = i + 1) {
// //     console.log(i)
// // }

// for (let i = 1; i <= 20; ++i) {
//     console.log(i)
//     if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} -> "Frontend Simplified`)
//     }
//     else if (i % 3 === 0) {
//         console.log(`${i} -> Frontend`)
//     }
//     else if (i % 5 ===0) {
//         console.log(`${i} -> Simplified`)
//     }
//    else {
//     console.log(`${i} -> ${i}`)
//    }
// };


// const str = "Frontend Simplifed"

// for (let i = 0; i < str.length; ++i) {
//     console.log(str[i])
// }



// FUNCTIONS

// // Function definition
// function welcomePersonToFES(firstName, lastName) {
//     console.log (`Welcome to FES, ${firstName} ${lastName}`)
// }

// //Call the function
// welcomePersonToFES(`Joe`, `Loperena`);
// welcomePersonToFES(`Nick`, `Loperena`);
// welcomePersonToFES(`Jay`, `Loperena`);

// // Addition function
// // function sumOfTwoNumbers(num1, num2) {
// //    return num1 + num2
// // }

// // console.log(sumOfTwoNumbers(10, 20))

// // Create a function that converts Celsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//     return celsius * 1.8 + 32
// }

// console.log(celsiusToFahrenheit(0))
// console.log(celsiusToFahrenheit(10))
// console.log(celsiusToFahrenheit(30))


// ARRAYS

// let arr = [20, 30, 40, 50, 100]

// // First element of array:
// console.log(arr[0])

// // Last element of array:
// console.log(arr[4])

// console.log(arr[arr.length - 1])
// // Adding an element to the end of an array
// arr.push(200)


// console.log(arr)

// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element < 50) {
//         return true
//     }
// })

// console.log(newArr)


// studentA = ['A+', 'A', 'FAIL'] 
// studentB = ['FAIL', 'FAIL', 'B']
// studentC = ['FAIL', ]

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = grades.filter(element => element != 'FAIL');
// console.log(goodGrades)

//Create new empty array
// let goodGrades = []

// for (let i = 0; i < grades.length; ++i) {
//     if (grades[i] !== 'FAIL') {
//         goodGrades.push(grades[i]);
//     }
// }

// console.log(goodGrades)



// let arr = [1, 4, 9, 16]

// let newArray = arr.map((element) => {
//     return 'dog';
// })

// console.log(newArray)


// let dollars = [1, 5, 10, 3];

// let cents = dollars.map(element => element * 100)

// console.log(cents)      

let dollars = [1, 5, 10, 3];

let cents = [];

for (let i = 0; i < dollars.length; ++i) {
   cents.push(dollars[i] * 100);
 }

console.log(cents)