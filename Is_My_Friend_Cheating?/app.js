function removeNb (n) {
  //a * b = sum - a - b
  //a=(sum-b)/(b+1)
  sum = (n*(n+1)/2)
  array = [];
  results = []
  a = 0;
  b = 0

  // iterate though array to find matches
  for(b = n; b > 0; b--){
    let a = (sum-b)/(b+1)
    if(a < n && Number.isInteger(a)) {
      results.push([a, b])
    }
  }
  return results
}

removeNb(101)
removeNb(26)
removeNb(100)
