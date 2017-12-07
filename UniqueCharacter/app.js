console.log('do work');

function findUniq(array){

  array.sort()
  
  if(array[0] === array[array.length-1]){
    let sameSame = 'all numbers are the same';
    return sameSame;
  }

    if(array[0] != array[1]){
      return array[0]
    }
    else{
      return array[array.length-1]
    }


}

console.log(findUniq([ 8, 8, 8, 8, 8, 8, 8, 7 ]));//7
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));//2
console.log(findUniq([ 0, 1, 1, 1, 1, 1, 1, 1 ]))//0
console.log(findUniq([ 3, 10, 3, 3, 3 ]))//10
console.log(findUniq([ 3, 3, 3, 3 ]))//all numbers are the same
