function narcissistic(value) {
    let amount = value.toString().length
    let digits = value.toString().split('').map(Number)
    let sum = []
    for (let i = 0; i <= digits.length - 1; i++) {
        sum.push(digits[i] ** amount)
    }
    let total = sum.reduce((a, b) => a + b, 0)
    if (value === total) {
        return true
    }
    return false
}


console.log(narcissistic(10))

// Best practices
function narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
        return p + Math.pow(c, ('' + value).length)
        }, 0) == value;
}