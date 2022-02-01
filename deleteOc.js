function deleteNth(arr, n) {
    let totals = {};
    return arr.filter(el => (totals[el] = ++totals[el] || 0) < n);
}

  
  console.log(deleteNth([1, 1, 1, 1], 2));
  console.log(deleteNth([20, 37, 20, 21], 2));