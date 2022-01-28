function descendingOrder(n){
    
    let digits = n.toString().split('')
    let sorted = digits.sort().reverse().join('')
    return Number(sorted)
}

console.log(descendingOrder(42145))


//Best practice
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}