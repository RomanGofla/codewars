function persistence(num) {
    if (num.toString().length === 1) {
        return 0;
    }
    let mult = 1;
    let splitStr = num.toString().split("");
    for (let i = 0; i < splitStr.length; i++) {
        mult *= parseFloat(splitStr[i])
    }
    return 1 + persistence(parseFloat(mult));
}

console.log(persistence(39))

//Best practices
function persistence(num) {
    let times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }