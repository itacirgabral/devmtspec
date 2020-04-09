var assert = require("assert");
var make_soma = require("../somabase");

var base10q = ["Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var base10n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

describe("# SOMA EM QUANQUER BASE", function () {
  it("## BASE 10Q", function () {
    var soma = make_soma(base10q)
    var a = "T";
    var b = "U";
    var gabarito = {
      digito: "X",
      vaium: false
    };

    var resultado = soma(a, b);

    assert.deepEqual(resultado, gabarito);
  });
  it("## BASE 10Q COM UM", function () {
    var soma = make_soma(base10q)
    var a = "T";
    var b = "U";
    var gabarito = {
      digito: "Y",
      vaium: false
    };

    var resultado = soma(a, b, true);

    assert.deepEqual(resultado, gabarito);
  });
  it("## BASE 10Q VAI UM", function () {
    var soma = make_soma(base10q)
    var a = "X";
    var b = "X";
    var gabarito = {
      digito: "U",
      vaium: true
    };

    var resultado = soma(a, b);

    assert.deepEqual(resultado, gabarito);
  });
  it("## BASE 10Q COM UM VAI UM", function () {
    var soma = make_soma(base10q)
    var a = "X";
    var b = "X";
    var gabarito = {
      digito: "V",
      vaium: true
    };

    var resultado = soma(a, b, true);

    assert.deepEqual(resultado, gabarito);
  });
});