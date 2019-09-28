/*7. Insertion Sort
a. Desc -> Reads in strings from standard input and prints them in sorted order.
Uses insertion sort.
b. I/P -> read in the list words
c. Logic -> Use Insertion Sort to sort the words in the String array
d. O/P -> Print the Sorted List

Author Name : Priyanka Gandhi
Date : 27/09/2019
*/

const input = require("./Algoutility")      //accessing insertionSort function form Algoutility
var array = []; var i;
console.log(acceptUserInputs());        //calling a function take user input for number of elements and array elements

function acceptUserInputs() {

    console.log("Enter Number of Elements");
    var numberofelements = input.data.input()
    console.log("Enter Array Elements");
    /*
    * Taking User Input for array elements
    */
    for (i = 0; i < numberofelements; i++) {
        array[i] = input.data.input()
        array.push()
        // console.log(array[i]);
    }
    console.log("Original Array: " + array);
}
console.log(input.data.insertionSort(array)) // calling a function to perform sorting and returning output