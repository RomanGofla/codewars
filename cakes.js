function cakes(recipe, available) {
    let maxCakes
    for (let ingredient in recipe) {
    if (available[ingredient]) {
        const possibleCakes = Math.floor(available[ingredient] / recipe[ingredient] || 0)
        if (!maxCakes || possibleCakes < maxCakes) {
            maxCakes = possibleCakes
        }
        } else {
            return 0
        }
    }
    return maxCakes
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))

//Best practices
// function cakes(recipe, available) {
    // return Object.keys(recipe).reduce(function (val, ingredient) {
    //     return Math.min(
    //       Math.floor(available[ingredient] / recipe[ingredient] || 0),
    //       val
    //     )
    //   }, Infinity)
// }