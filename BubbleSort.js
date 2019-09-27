const input = require("./Algoutility")
var number = require("readline-sync")
var array = []; var i ;
console.log("Enter Number of Elements");
var numberofelements = input.data.input()
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