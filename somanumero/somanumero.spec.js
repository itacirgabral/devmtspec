var assert = require('assert');
var somanumero = require('../somanumero');
var mocha = require('mocha');

var describe = mocha.describe;
var it = mocha.it;

describe('# DESCRIÇÃO DE UM BLOCO DE CASOS', function() {
  it('## DESCRIÇÃO DE UM CASO', function() {
    var a = 3;
    var b = 4;
    var gabarito = 7;

    var soma = somanumero(a, b)

    assert.equal(soma, gabarito, "OPS MENSAGEM DE ERRO")
  });
});