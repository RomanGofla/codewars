var moveZeros = function (arr) {
    return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}

console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]))