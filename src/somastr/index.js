function somastr (a, b) {
  var ab;
  var ba;
  if (a.length > b.length) {
    ab = a.length - b.length;
    ba = 0;
  } else {
    ab = 0;
    ba = b.length - a.length;
  }

  var arrA = Array(ba).fill('0').concat(a.split(''));
  var arrB = Array(ab).fill('0').concat(b.split(''));
  var i;
  
  var arrAB = [];
  var vaium = false;
  var digito;
  for (i = arrA.length - 1; i > -1; i--) {
    digito = Number(arrA[i]) + Number(arrB[i]);

    if (vaium) {
      digito = digito + 1;
      vaium = false;
    }

    if (digito > 9) {
      vaium = true;
      digito = digito - 10;
    }
    
    arrAB[i] = digito
  }

  if (vaium) {
    arrAB = ['1'].concat(arrAB)
  }

  return arrAB.join('')
}

module.exports = somastr;
