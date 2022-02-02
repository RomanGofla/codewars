function maxSequence(arr){
    let currentSum = 0
    let maxSum = 0

    if(arr.length === 0){
        return 0
    }

    arr.forEach(a => {
        currentSum = Math.max(a, currentSum + a)
        maxSum = Math.max(maxSum, currentSum)
    })
    return maxSum
}

console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, 4]))