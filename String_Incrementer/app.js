// Your job is to write a function which increments
// a string, to create a new string. If the string
// already ends with a number, the number should be
// incremented by 1. If the string does not end with
// a number the number 1 should be appended to the
// new string.

function incrementString (string) {

  let regXmatch = string.match(/\d+/g)
  let incrementedNumber
  let matchLength
  let matchIndex
  let incrementedByOne
  let addThisMany
  let numArray
  let addedZeros
  let numberlessString
  let stringPlusNumbers

    if (regXmatch == null){

      //if the string has no numbers, add 1
      //console.log(string += 1);
      return string += 1
    }

    //else get information about the number on the end.
    else if (regXmatch != null) {

        //regXmatch is an array with one element
        //the numbers that were at the end of the string
        //console.log(regXmatch[0])

        //we can get the length of the number and
        //add length it when its incremented
        matchLength = regXmatch[0].length
        //console.log(matchLength);
        //add one to the number taken off the end of the stirng
        incrementedByOne = plusOne(parseInt(regXmatch[0]))
        //console.log(incrementedByOne);

        //find out how many elemenets to add BACK on to the incremented element
        //to make it the same length as before.
        addThisMany = numberOfZeros(incrementedByOne, matchLength)
        //console.log(addThisMany);

        //turn the number into an array for eveluation
        numArray = splitString(incrementedByOne)
        //console.log(numArray);

        //add the correct amount of zeros back onto the front of the new array
        //0 is what to add, can be changed.
        addedZeros = addZeros(addThisMany, numArray, 0)
        //console.log(addedZeros);

        //get rid of the original numbers from original string
        numberlessString = getRidOfNums(string, matchLength);

        //add the updated/incremented number back onto string
        stringPlusNumbers = numberlessString + addedZeros.join('')
        //console.log(stringPlusNumbers);

        return stringPlusNumbers
    }


}

//separte function to have a clean, no number string
//to add on to later || refactor to H.O. functions
const getRidOfNums = (string, numLength) => {

  //split the string into an array
  let splitString = string.split('')

  //interate through array and pop numbers
  //off the end using "numLength" from above
  for(let i = 0; i < numLength; i++){
    splitString.pop()
  }

  //rejoin the string to a num-less string
  stringNoNums = splitString.join('')
  return stringNoNums
}


const addZeros = (zeroNumber, array, addThis) =>{
  //interate over the array for as many 0's need to be added
  for(i=0;i<zeroNumber;i++){
    //add the 0's
    array.unshift(addThis)
  }
  return array
}

const numberOfZeros = (number, length) => {
  //calulating the number of zeros that need to be added back
  let concatZeros = length - number.toString().length
  return concatZeros
}

const splitString = (string) => {
  //split the string of numbers to an array
  return string.toString().split('')
}

const plusOne = (num) => {
  //increment the number off the end of string.
  return num + 1
  //this will elminate 0's, so we'll add them back.
}

incrementString("foobar")
incrementString("")
incrementString("foobar010")
incrementString("foobar1")
incrementString("foobar99")

//better answers, less clear anwers.

function incrementString(input) {
  if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}
