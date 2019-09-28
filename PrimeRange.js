/*2. Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.

Author Name : Priyanka Gandhi
Date : 26/09/2019
*/

const input = require("./Algoutility")  //accessing primeRange function from Algoutility
console.log("Enter a range to find Prime Numbers: ");
var range = input.data.input()      //Taking user input for range
// console.log(num)

var array = input.data.primerange(range) //calling primeRange function to find prime numbers and storing in an array

console.log("Prime Numbers: " + JSON.stringify(array)) //Displaying output





/*function primeRange(n){
    //var i = 2;
    /*if(n % i == 0){
        console.log("2")
    }*/
/*var arr=[]
    for (i = 1; i <= n; i++){
       var count =0;
        for (j = 2; j <= i/2 ; j++){
            if (i % j == 0){
                count++
                  
            }
        }
           
        if(count == 0){
            console.log(i)
            arr.push(i)
        }  
    }
    console.log("Prime Numbers: "+JSON.stringify(arr))
    return arr;
}
*/
