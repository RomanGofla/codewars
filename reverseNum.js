function descendingOrder(n){
    let stack = []
    const splited = n.toString().split('').map((int) => stack.push(parseInt(int)))
    let orderedArr = stack.sort().reverse().join('')
    let backNumber = Number(orderedArr)
    return backNumber
}


console.log(descendingOrder(27337))