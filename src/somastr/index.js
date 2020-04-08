function somastr (a, b) {
  var arrA = a.split('');
  var arrB = b.split('');
  
  var arrAB = [];
  arrAB[0] = Number(arrA[0]) + Number(arrB[0]);

  return arrAB.join('')
}

module.exports = somastr;
