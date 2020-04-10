var express = require('express');
var fs = require('fs');
var path = require('path');
var soma = require('../soma');

var app = express();

var homepage = fs.readFileSync(path.join(__dirname, 'homepage.html'), 'utf8');
var resultadoTemplate = fs.readFileSync(path.join(__dirname, './resultadoTemplate.html'), 'utf8');

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.send(homepage)
});

app.get('/soma', express.urlencoded({ extended: true }), function (req, res) {
  var a = req.query.a;
  var b = req.query.b;
  var AmaisB = soma(a, b);

  var resultado = resultadoTemplate
    .replace("{ a }", a)
    .replace("{ b }", b)
    .replace("{ AmaisB }", AmaisB);

  res.setHeader('Content-Type', 'text/html');
  res.send(resultado);
});

app.listen(8080);