// function arrayDiff(a, b) {
//     return a.filter(x => !b.includes(x));
// }

function arrayDiff(a, b) {
    let arr = [];
    
    for(let i = 0;i<a.length;i++){
        if(b.indexOf(a[i])<0){
            arr.push(a[i]);
        }
    }
  
    return arr;
}

console.log(arrayDiff([1,2,3],[1]))

