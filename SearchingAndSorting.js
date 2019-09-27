const input = require("./Algoutility")      //importing algoutility to access functions
var number = require("readline-sync")       // importing to restrict type of data from user
var array = []
var elapsetimearray = []

/*
* Entering data from users and storing in an Array
*/

function enterArrayElements(option) {
    if (option % 2 == 0) {
        console.log("Enter number of elements: ");
        var numberofelements = number.questionInt()
        console.log("Enter Array Elements: ");

        for (i = 0; i < numberofelements; i++) {
            array[i] = input.data.input()
            array.push()
        }
        console.log("Original Array: " + array);
    } else {
        console.log("Enter number of elements: ");
        var numberofelements = number.questionInt()
        console.log("Enter Array Elements: ");
        for (i = 0; i < numberofelements; i++) {
            array[i] = number.questionInt()
            array.push()
        }
        console.log("Original Array: " + array);
    }

}

console.log("Select number to perform particular operation: ");
console.log("1. binarySearch for Integer");
console.log("2. binarySearch for String");
console.log("3. insertionSort for Integer");
console.log("4. insertionSort for String");
console.log("5. bubbleSort for Integer");
console.log("6. bubbleSort for String");
var operation = number.questionInt()
console.log(performOperation(operation));


function performOperation(option) {
    if (option > 0 && option < 7) {
        switch (option) {
            case 1:
                var count = 0; var arrayelements;
                console.log(inputToStartTime());
                var starttime = input.data.stopwatch()
                enterArrayElements(option)
                // console.log("Enter number of elements: ");
                // var numberofelements = number.questionInt()
                // console.log("Enter Array Elements: ");

                // for (i = 0; i < numberofelements; i++) {
                //     array[i] = number.questionInt()
                //     array.push()
                // }
                // console.log("Original Array: " + array);
                console.log("Enter Keyword: ");
                var keyword = number.questionInt()
                var result = input.data.searchNumber(array, keyword)
                console.log("Result : " + result);

                var stoptime = input.data.stopwatch()
                console.log("Time Taken to Execute : " + elapsetimearray.push(stoptime - starttime));

                break
            case 2:
                console.log(inputToStartTime());
                var starttime = input.data.stopwatch()
                // var arrayelements = enterArrayElements()
                console.log("Enter any string");
                var string = input.data.input()
                console.log("Enter Keyword: ");
                var keyword = input.data.input()
                var result = input.data.searchWord(string, keyword)
                console.log("Result : " + result);
                var stoptime = input.data.stopwatch()
                console.log("Time Taken to Execute : " + elapsetimearray.push(stoptime - starttime));
                break
            case 3:
                console.log(inputToStartTime());
                var starttime = input.data.stopwatch()
                var arrayelements = enterArrayElements()
                console.log(input.data.insertionSort(array))
                var stoptime = input.data.stopwatch()
                console.log("Time Taken to Execute : " + elapsetimearray.push(stoptime - starttime));
                break
            case 4:
                console.log(inputToStartTime());
                var starttime = input.data.stopwatch()
                var arrayelements = enterArrayElements()
                console.log(input.data.insertionSort(array))
                var stoptime = input.data.stopwatch()
                console.log("Time Taken to Execute : " + elapsetimearray.push(stoptime - starttime));
                break
            case 5:
                console.log(inputToStartTime());
                var starttime = input.data.stopwatch()
                var arrayelements = enterArrayElements()
                console.log(input.data.bubbleSort(array));
                var stoptime = input.data.stopwatch()
                console.log("Time Taken to Execute : " + elapsetimearray.push(stoptime - starttime));
                break
            case 6:
                console.log(inputToStartTime());
                var starttime = input.data.stopwatch()
                var arrayelements = enterArrayElements()
                console.log(input.data.bubbleSort(array));
                var stoptime = input.data.stopwatch()
                console.log("Time Taken to Execute : " + elapsetimearray.push(stoptime - starttime));
                break
        }
    } else {
        console.log("Please enter valid number: ");
        var num = input.data.input()
        console.log(performOperation(num));

    }
    console.log("Do you want to continue?, then type 1");
    var continueorexit = number.questionInt()
    console.log(continueOrExit(continueorexit));

    console.log("Elapsed Time Array: " + elapsetimearray);
    console.log("Time in Descending Order : " + timeInDescendingOrder(elapsetimearray));

}

function timeInDescendingOrder(elapsetimearray) {
    for (i = 0; i <= elapsetimearray.length - 1; i++) {
        for (j = i + 1; j <= array.length; j++) {
            if (array[i] > array[j]) {
                var temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
}

function inputToStartTime() {
    console.log("Press any key to start calculating time");
    var startofclock = input.data.input()
}


function continueOrExit(continueorexit) {
    if (continueorexit == 1) {
        console.log("Please enter the number of operation you wish to perform: ");
        var num = number.questionInt()
        console.log(performOperation(num));
    }
}