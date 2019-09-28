/*8. Bubble Sort
a. Desc -> Reads in integers prints them in sorted order using Bubble Sort
b. I/P -> read in the list ints
c. O/P -> Print the Sorted List

Author Name : Priyanka Gandhi
Date : 27/09/2019
*/

const input = require("./Algoutility")      //to access bubbleSort function from Algoutility
var number = require("readline-sync")       //to access questionInt method to restrict input to Integer
var array = []; var i ;
console.log("Enter Number of Elements");
var numberofelements = number.questionInt()     //taking number of elements in array from user
console.log("Enter Array Elements");
/*
* Taking User Input for array elements
*/
for (i = 0; i < numberofelements; i++){
    array[i] = number.questionInt()
    array.push()    
    // console.log(array[i]);
}
console.log("Original Array: " + array);

/*
* Calling BubbleSort function from utility file and displaying sorted array
*/
console.log(input.data.bubbleSort(array));




// function bubbleSort(arrayelements){
//     for(i = 0; i <= arrayelements.length-1; i++){
//         for(j = i+1; j <= arrayelements.length-1; j++){
//             while(arrayelements[i] > arrayelements[j]){
//                 var temp = arrayelements[i]
//                 arrayelements[i] = arrayelements[j]
//                 arrayelements[j] = temp
//             }
//         }
//     }
//     console.log("Sorted Array: " + arrayelements);
//}