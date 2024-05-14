console.log("Hello World!")

let fullName = "Nicholas Loperena"
let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit)

let cash = 45;
let price = 40;
let isStoreOpen = true;
let difference = cash - price

if (cash >= price) {
    console.log(`you paid extra - here's ${difference} your change`)
}
else if (cash === price) {
    console.log("you paid the exact amount, have a nice day!")
}
else {
    console.log(`not enough money - you still owe ${difference * -1} dollars`)
}


let hot = true
hot ? console.log("weather is hot outside") : console.log("weather is cold")

let subscribed = true
let loggedIn = true

let str = subscribed || loggedIn ? "show the video" : "hide the video"
console.log(str);

let receipt = isStoreOpen && (cash >= price) ? "give receipt" : "do not give receipt"
console.log(receipt)

let count = 1;
while (count <=100) {
    console.log(count)
    count = count +1
}