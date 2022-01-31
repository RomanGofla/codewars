function duplicateEncode(word){
    let str = word.toLowerCase()
    let unique = ''
    for (let i=0; i<str.length; i++){
        if (str.lastIndexOf(str[i]) !== str.indexOf(str[i])){
            unique += ')'
        } else {
            unique += '('
        }
    }
    return unique
}
//Best practice
// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
// }

console.log(duplicateEncode('poleno'))
