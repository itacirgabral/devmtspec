function make_somastr (somadigito) {

  return function somastr (a, b) {
    var ab;
    var ba;
    if (a.length > b.length) {
      ab = a.length - b.length;
      ba = 0;
    } else {
      ab = 0;
      ba = b.length - a.length;
    }
  
    var zero = somadigito()
    var arrA = Array(ba).fill(zero).concat(a.split(''));
    var arrB = Array(ab).fill(zero).concat(b.split(''));
    var i;
    
    var arrAB = [];
    var vaium = false;
    var digito;
    var retornoSomaDigito;

    for (i = arrA.length - 1; i > -1; i--) {

      retornoSomaDigito = somadigito(arrA[i], arrB[i], vaium);
      digito = retornoSomaDigito.digito;
      vaium = retornoSomaDigito.vaium;
      
      arrAB[i] = digito;
    }
  
    if (vaium) {
      var um = somadigito(undefined, undefined, true).digito;
      arrAB = [um].concat(arrAB);
    }
  
    return arrAB.join('');
  }
}

module.exports = make_somastr;
