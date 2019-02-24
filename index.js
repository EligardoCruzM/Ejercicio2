var cad = require("./cadena");

var str = "Anita lava la tina";

var palindrome = cad.pa(str);
var countWords = cad.cw(str);
var countLetters = cad.cl(str);
var countVowels = cad.cv(str);
var countConsonants = cad.cc(str);

console.log("La cadena " + palindrome);
console.log("El número total de palabras es de " + countWords);
console.log("El número total de letras es de " + countLetters);
console.log("El número total de vocales es de " + countVowels);
console.log("El número total de consonantes es de " + countConsonants);