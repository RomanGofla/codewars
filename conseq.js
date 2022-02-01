const strarr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"]

function longestConsec(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) return ''
    
    let longStr = ''
    
    let newStr = ''
    
    for (let i = 0; i < strarr.length; i++){
      newStr = strarr.slice(i, i+k);
      console.log(longStr.length)
      if (newStr.join('').length > longStr.length ){
        longStr = newStr.join('');
      }
    }
    
    return longStr;
}

console.log(longestConsec(strarr, 2))