var assert = require("assert");
var soma = require("../soma");

describe("# DESCRIÇÃO DE UM BLOCO DE CASOS", function () {
  it("## DESCRIÇÃO DE UM CASO", function () {
    var a = 3;
    var b = 4;
    var gabarito = 7;

    var resultado = soma(a, b);

    assert.equal(resultado, gabarito, "OPS MENSAGEM DE ERRO");
  });
  it("## DESCRIÇÃO DE UM CASO", function () {
    var a = 3;
    var b;
    var gabarito = 3;

    var resultado = soma(a, b);

    assert.equal(resultado, gabarito, "OPS MENSAGEM DE ERRO");
  });
  it("## DESCRIÇÃO DE UM CASO", function () {
    var a = 3;
    var b = NaN;
    var gabarito = 3;

    var resultado = function () {
      soma(a, b)
    };

    assert.throws(resultado);
  });
  it("## DESCRIÇÃO DE UM CASO", function () {
    var a = '3';
    var b = '4';
    var gabarito = '34';

    var resultado = soma(a, b);

    assert.equal(resultado, gabarito, "OPS MENSAGEM DE ERRO");
  });
});