function rot13(message){
  let newArr = []
  let diff
  let char
  let code
  let mapped = message.split('').map((e, i)=>{
    if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
      let code = message.charCodeAt(i) + 13
      if (code > 122){
        char = String.fromCharCode(97 + (code-123));
      }else{
        char = String.fromCharCode(code);
      }
    } else if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
      code = message.charCodeAt(i) + 13
      if (code > 90){
        diff = code-91
        char = String.fromCharCode(65 + diff);
      }else{
        char = String.fromCharCode(code);
      }
    }else{
      char = message[i]
    }
    return newArr.push(char)
  })
  return console.log(newArr);
}

rot13("test_test test % test")
rot13("Test")
