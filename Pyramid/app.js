function longestSlideDown (pyramid) {
  let pyramidSums = []
  let arrAboveIndex = pyramid.length-2
    for(let i = arrAboveIndex; i >= 0; i--){
      for( j = 0; j < i+1; j++){
        let maxNumUnder = Math.max(pyramid[i+1][j], pyramid[i+1][j+1])
        let maxSum = maxNumUnder + pyramid[i][j]
        pyramid[i][j] = maxSum
      }
    }
    return (pyramid[0][0]);
  }


longestSlideDown(
  [[3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]])
