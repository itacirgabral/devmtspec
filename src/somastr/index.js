function somastr (a, b) {
  var ab = a.length > b.length ? a.length - b.length : 0;
  var ba = a.length > b.length ? 0 : b.length - a.length;

  var arrA = Array(ba).fill('0').concat(a.split(''));
  var arrB = Array(ab).fill('0').concat(b.split(''));
  var i;
  
  var arrAB = [];
  for (i = 0; i < arrA.length; i++) {
    arrAB[i] = Number(arrA[i]) + Number(arrB[i])
  }

  return arrAB.join('')
}

module.exports = somastr;
