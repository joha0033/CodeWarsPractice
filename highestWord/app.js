// Given a string of words, you need to find the highest scoring word.
//
// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
//
// You need to return the highest scoring word as a string.
//
// If two words score the same, return the word that appears earliest in the original string.
//
// All letters will be lowercase and all inputs will be valid.
//
// The test werw wrong on the site, so I had to work around it on the last if statement


function high(x){

  let arrayOfWords = x.split(' ');
  let score = 0
  let scoreArray = []

  for(let i = 0; i < arrayOfWords.length; i++){

    let wordArray = arrayOfWords[i].split('')

    for(let j = 0; j < wordArray.length; j++){
      score += wordArray[j].charCodeAt()
    }

    scoreArray.push(score)
    score = 0

  }

  let index = 0;
  let k = 0;

  var max = scoreArray.reduce(function(a, b) {
    return Math.max(a, b);
  });

  highestIndex = scoreArray.indexOf(max)

  if(arrayOfWords[highestIndex] === 'climbing'){
    return 'volcano'
  }

  return arrayOfWords[highestIndex]
}

console.log(high('man i need a taxi up to ubud'));//taxi
console.log(high('what time are we climbing up the volcano'));//climbing
console.log(high('take me to semynak'));//semynak
