function perimeter(n) {
    let arr = [0,1]; 
    for (let i = 2; i <= n + 1; i++) { 
        arr[i] = arr[i-1] + arr[i-2]; 
    } 
    return 4*arr.reduce((a,b) => { return a+b }); 
}


//Best practices
// function perimeter(n) {
//   let i, fib = [1, 1];
  
//   for(i = 2; i <= n; i++) {
//     fib[i] = fib[i-2] + fib[i-1];
//   }
  
//   let total = fib.reduce((a, b) => a + b);
  
//   return 4 * total;
// }