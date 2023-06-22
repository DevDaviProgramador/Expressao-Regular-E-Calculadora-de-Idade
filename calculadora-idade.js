var readLineSync = require('readline-sync');

var milisegundos = new Date() - new Date("2007-12-12");
var segundos = milisegundos/ 1000;
var minutos = segundos/ 60;
var horas = minutos/ 60;
var dias = horas/ 24;
var idade = dias/ 365; 
console.log(idade.toFixed(1));

// caminho "cd "C:\Users\Guilherme\OneDrive\Área de Trabalho\Workspace\projetos 2023\atividades javascript 3.1\Hello-Node2""
// comando "node calculadora-idade.js"