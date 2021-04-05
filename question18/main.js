// Import events module
const EventEmitter = require('events');

// Create an eventEmitter object
const primeEmitter = new EventEmitter()

primeEmitter.on('armstrong', (number) => {
    console.log(`Armstrong event received: ${number}`)
})

function isArmstrongNumber(number) {
    var numberString = number.toString()
    var total = 0;
    for (let i = 0; i < numberString.length; i++) {
        let num = parseInt(numberString.charAt(i))
        total += Math.pow(num, numberString.length)
    }
    return total == number
}

var runUpto = 1000000000

var n = 1;

while (n <= runUpto) {
    if (isArmstrongNumber(n)) {
        primeEmitter.emit('armstrong', n)
    }
    n++
}

console.log("Program Ended.");