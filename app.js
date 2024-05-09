console.log("Hello World!")

let fullName = "Nicholas Loperena"
let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit)

let cash = 45;
let price = 40;
let difference = cash - price

if (cash > price) {
    console.log(`you paid extra - here's ${difference} your change`)
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
}
else {
    console.log(`not enough money - you still owe ${difference * -1} dollars`)
}