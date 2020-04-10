var assert = require("assert");
var soma = require("../somastr");

describe("# DESCRIÇÃO DE UM BLOCO DE CASOS", function () {
  it("## DESCRIÇÃO DE UM CASO", function () {
    var a = "3";
    var b = "4";
    var gabarito = "34"

    var resultado = soma(a, b)
    assert.equal(resultado, gabarito);
  });
});