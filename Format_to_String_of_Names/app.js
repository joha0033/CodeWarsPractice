function list(names){

  if(names[0] === undefined){
    console.log('');
    return ''
  }else if(names[0] != undefined && names.length <= 1){
    console.log(names[0].name);
    return
  }
  

}

// list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])
// list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])
list([{name: 'Bart'},{name: 'Lisa'}])
list([{name: 'Bart'}])
list([])
