function somastr (a, b) {
  var arrA = a.split('');
  var arrB = b.split('');
  var i;
  
  var arrAB = [];
  for (i = 0; i < arrA.length; i++) {
    arrAB[i] = Number(arrA[i]) + Number(arrB[i])
  }


  return arrAB.join('')
}

module.exports = somastr;
