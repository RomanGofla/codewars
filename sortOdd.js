function sortArray(array) {
    indices = [];

    array
    .filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => array[indices[i]] = v);

    return array
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

//Best practices
function sortArray(array) {
    let odds = [];
    //loop, if it's odd, push to odds array
    for (let i = 0; i < array.length; ++i) {
      if (array[i]%2 !== 0) {
        odds.push(array[i]);
      }
    }
    //sort odds from smallest to largest
    odds.sort(function(a,b){
      return a-b;
    });
    
    //loop through array, replace any odd values with sorted odd values
    for (let j = 0; j < array.length; ++j) {
      if (array[j]%2 !== 0) {
        array[j] = odds.shift();
      }
    }
    
   return array;
}