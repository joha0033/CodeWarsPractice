function scramble(str1, str2) {
  let array1 = str1.split("").sort();
  let array2 = str2.split("").sort();
  var i = 0;
  for(var x = 0; i<array2.length && x<=array1.length; x++) {
    if(array2[i] === array1[x]) {
      i++;
    }
  }
  return (x <= array1.length);
}
scramble('rkqodlw','world')//,true);
scramble('cedewaraaossoqqyt','codewars')//,true);
scramble('katas','steak'),//false);
scramble('scriptjava','javascript')//,true);
scramble('scriptingjava','javascript')//,true);
scramble('scriptsjava','javascripts')//,true);
scramble('jscripts','javascript')//,false);
scramble('aabbcamaomsccdd','commas')//,true);
