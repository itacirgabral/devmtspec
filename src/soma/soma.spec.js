var assert = require("assert");
var soma = require("../soma");
var mocha = require("mocha");

var describe = mocha.describe;
var it = mocha.it;

describe("# TESTE DA FUNÇÃO SOMA", function () {
  it("## CASO PRINCIPAL", function () {
    var a = 3;
    var b = 4;
    var gabarito = 7;

    var resultado = soma(a, b);

    assert.equal(resultado, gabarito, "SOMA MAL IMPLEMENTADA");
  });
  it("## CASO DEFENSIVO", function () {
    var a = 3;
    var gabarito = 3;

    var resultado = soma(a);

    assert.equal(resultado, gabarito);
  });
  it("## CASO ABSURDO", function () {
    var a = NaN;
    var b = 4;

    assert.throws(() => soma(a, b), new RangeError("Operações com NaN são ilegais!"));
  });
});