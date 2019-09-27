const input = require("./Algoutility")
var array = []; var i;
console.log(acceptUserInputs());

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
console.log(input.data.insertionSort(array))