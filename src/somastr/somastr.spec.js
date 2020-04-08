var assert = require("assert");
var soma = require("../somastr");

describe("# FUNÇÃO SOMA STRING", function () {
  it("## SOMA 1 ALGARISMO", function () {
    var a = '3';
    var b = '4';
    var gabarito = '7';

    var resultado = soma(a, b)

    assert.equal(resultado, gabarito);
  });
  it("## SOMA N ALGARISMO", function () {
    var a = '333';
    var b = '444';
    var gabarito = '777';

    var resultado = soma(a, b)

    assert.equal(resultado, gabarito);
  });
});