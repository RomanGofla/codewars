function sumPairs(ints, s) {
    let seen = {}
    for (let i = 0; i < ints.length; ++i) {
        if (seen[s - ints[i]]){
            return [s - ints[i], ints[i]];
        }
        seen[ints[i]] = true
    }
}

console.log(sumPairs([4, 3, 2, 3, 4], 6))