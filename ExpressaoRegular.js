var readLineSync = require('readline-sync');

//EXPRESSÃO REGULAR
var str = "123456789";
var p = /[5-7]/g;
var resultado = str.match(p);
console.log("RESULTADO = " + resultado);

RESULTADO = 1,2,3,4,8,9
RESULTADO = 5,6,7

// caminho "cd "C:\Users\Guilherme\OneDrive\Área de Trabalho\Workspace\projetos 2023\atividades javascript 3.1\Hello-Node2""
// comando "node ExpressaoRegular.js"