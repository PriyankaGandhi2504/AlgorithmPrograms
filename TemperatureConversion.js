/*12. To the Util Class add ​ temperaturConversion static function, given the temperature
in fahrenheit as input outputs the temperature in Celsius or viceversa using the
formula
Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
Fahrenheit to Celsius: (°F − 32) x 5/9 = °C 

Author Name : Priyanka Gandhi
Date : 27/09/2019
*/

const input = require("./Algoutility")
const number = require("readline-sync")
console.log("Please select the option : ");
console.log("1. Convert Celsius to Fahrenheit");
console.log("2. Convert Fahrenheit to Celsius");
var option = number.questionInt()
console.log(input.data.temperatureConversion(option));