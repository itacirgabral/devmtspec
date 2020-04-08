function somanumero (a, b = 0) {
  if (isNaN(a) || isNaN(b)) {
    throw new RangeError("Operações com NaN são ilegais!")
  } else {
    var soma = a + b;
    return soma;
  }
}

module.exports = somanumero;
