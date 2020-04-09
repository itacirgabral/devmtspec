var assert = require("assert");
var make_soma = require("../somastr");
var make_somadigito = require("../somabase")

describe("# FUNÇÃO SOMA STRING", function () {
  describe("## BASE DECIMAL", function () {
    it("### SOMA 1 ALGARISMO", function () {
      var base = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var somadigito = make_somadigito(base);
      var soma = make_soma(somadigito);
      var a = '3';
      var b = '4';
      var gabarito = '7';
  
      var resultado = soma(a, b)
  
      assert.equal(resultado, gabarito);
    });
    it("### SOMA N ALGARISMO", function () {
      var base = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var somadigito = make_somadigito(base);
      var soma = make_soma(somadigito);
      var a = '333';
      var b = '444';
      var gabarito = '777';
  
      var resultado = soma(a, b)
  
      assert.equal(resultado, gabarito);
    });
    it("### SOMA N ALGARISMO ASSIMETRICOS", function () {
      var base = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var somadigito = make_somadigito(base);
      var soma = make_soma(somadigito);
      var a = '3';
      var b = '444';
      var gabarito = '447';
  
      var resultado = soma(a, b)
  
      assert.equal(resultado, gabarito);
    });
    it("### SOMA VAI UM", function () {
      var base = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var somadigito = make_somadigito(base);
      var soma = make_soma(somadigito);
      var a = '37';
      var b = '44';
      var gabarito = '81';
  
      var resultado = soma(a, b)
  
      assert.equal(resultado, gabarito);
    });
    it("### SOMA VAI UM E VOLTA", function () {
      var base = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var somadigito = make_somadigito(base);
      var soma = make_soma(somadigito);
      var a = '237';
      var b = '244';
      var gabarito = '481';
  
      var resultado = soma(a, b)
  
      assert.equal(resultado, gabarito);
    });
    it("### SOMA VAI UM NO ULTIMO", function () {
      var base = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var somadigito = make_somadigito(base);
      var soma = make_soma(somadigito);
      var a = '996';
      var b = '4';
      var gabarito = '1000';
  
      var resultado = soma(a, b)
  
      assert.equal(resultado, gabarito);
    });
    it("### DESBUG IEEE 754", function () {
      var base = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var somadigito = make_somadigito(base);
      var soma = make_soma(somadigito);
      var a = '100000000000000000000';
      var b = '10000';
      var gabarito = '100000000000000010000';
  
      var resultado = soma(a, b)
  
      assert.equal(resultado, gabarito);
    });
  });
  describe("## BASE VOCAL", function () {
    it("### SOMA N ALGARISMO ASSIMETRICOS", function () {
      var base = ["a", "e", "i", "o", "u"];
      var somadigito = make_somadigito(base);
      var soma = make_soma(somadigito);
      var a = 'aaa';
      var b = 'a';
      var gabarito = 'aaa';
  
      var resultado = soma(a, b)
  
      assert.equal(resultado, gabarito);
    });
    it("### SOMA VAI UM NO ULTIMO", function () {
      var base = ["a", "e", "i", "o", "u"];
      var somadigito = make_somadigito(base);
      var soma = make_soma(somadigito);
      var a = 'uu';
      var b = 'e';
      var gabarito = 'eaa';
  
      var resultado = soma(a, b);
  
      assert.equal(resultado, gabarito);
    });
  })
});