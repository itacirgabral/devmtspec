function somanumero (a = 0, b = 0) {
  if(isNaN(a)) {
    throw new RangeError("NaN")
  }
  if(isNaN(b)) {
    throw new RangeError("NaN")
  }

  var soma = a + b;

  return soma;
}

module.exports = somanumero;
