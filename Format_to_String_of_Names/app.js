function list(names){


  var namesArray = names.map(function(names) {
    return names['name'];
  });

  if(namesArray.length <= 1){
    namesString = namesArray.join(', ')
    console.log(namesString);
    return namesString
  } else {
    let lastName = namesArray.pop()
    namesString = namesArray.join(', ')
    namesString = namesString + ' & ' + lastName
    console.log(namesString);
    return namesString
  }






}

list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])
list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])
list([{name: 'Bart'},{name: 'Lisa'}])
list([{name: 'Bart'}])
list([])
