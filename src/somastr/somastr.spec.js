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
  it("## SOMA N ALGARISMO ASSIMETRICOS", function () {
    var a = '3';
    var b = '444';
    var gabarito = '447';

    var resultado = soma(a, b)

    assert.equal(resultado, gabarito);
  });
  it("## SOMA VAI UM", function () {
    var a = '37';
    var b = '44';
    var gabarito = '81';

    var resultado = soma(a, b)

    assert.equal(resultado, gabarito);
  });
  it("## SOMA VAI UM E VOLTA", function () {
    var a = '237';
    var b = '244';
    var gabarito = '481';

    var resultado = soma(a, b)

    assert.equal(resultado, gabarito);
  });
  it("## SOMA VAI UM NO ULTIMO", function () {
    var a = '996';
    var b = '4';
    var gabarito = '1000';

    var resultado = soma(a, b)

    assert.equal(resultado, gabarito);
  });
  it("## DESBUG IEEE 754", function () {
    var a = '100000000000000000000';
    var b = '10000';
    var gabarito = '100000000000000010000';

    var resultado = soma(a, b)

    assert.equal(resultado, gabarito);
  });
});