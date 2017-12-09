// For building the encrypted string:
// Take every 2nd char from the string,
// then the other chars, that are not every 2nd char,
// and concat them as new String.
// Do this n times!

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

function encrypt(text, n) {
  if(n < 0 && text != null){
    return text
  }
  if(text === null){
    return text
  }
  while(n != 0){

    n--
    arr1 = []
    arr2 = []

    for(let n = 0; n <= text.length-1; n++){

      if(n%2 != 0){
        arr1.push(text[n])
      }else{
        arr2.push(text[n])
      }

    }

    text = (arr1.join('') + arr2.join(''))

  }

  return(text);

}



function decrypt(encryptedText, n) {
  if((n <= 0 && encryptedText != null) || (n <= 0 && encryptedText != "")){
    return encryptedText
  }
  let ifOddChar = []
  let decrypted = []

  while(n !=0){
    encryptedArray = encryptedText.split('')
    if(encryptedArray.length%2 != 0){
      ifOddChar[0] = encryptedArray.pop()
    }

        let mid = Math.floor(encryptedArray.length/2)
        ar2 = encryptedArray.slice(0, mid)
        ar1 = encryptedArray.slice(mid, encryptedArray.length)


          for(let index = 0; index <= mid-1; index++){
            decrypted.push(ar1[index])
            decrypted.push(ar2[index])
          }
        if(ifOddChar[0] != null){
          decrypted.push(ifOddChar[0])
        }

      encryptedText =  decrypted.join('')
      decrypted = []
    n--;
  }

  return encryptedText

}


// console.log(encrypt('This is a test!', 1));

// console.log(decrypt('hsi  etTi sats!', 1));
// console.log(decrypt('otba', 1));
// console.log(decrypt("s eT ashi tist!", 2));
//
// console.log(decrypt(" Tah itse sits!", 3));
//
console.log(decrypt("This is a test!", 4));
// console.log(decrypt('otba', 1));
