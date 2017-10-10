// Complete the solution so that it splits the string
// into pairs of two characters. If the string contains
// an odd number of characters then it should replace
// the missing second character of the final pair with
// an underscore ('_').
//
// Examples:
//
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
  //  console.log(str);
  strArray = str.split('')
  holderArray = []
  newArray = []
  if(strArray.length%2 != 0){
    strArray.push('_');
  }
  for(let i=0;i<strArray.length;i++){
    if(i%2==0){
      holderArray.push(strArray[i])
      holderArray.push(strArray[i+1])
      holder = holderArray.join('')
      holderArray = []
      newArray.push(holder)
    }
  }
  console.log(newArray);
  return newArray
}

solution('abc');
solution('abcdef');
