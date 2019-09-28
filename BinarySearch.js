/*6. Binary Search the Word from Word List
a. Desc -> Read in a list of words from File. Then prompt the user to enter a word to
search the list. The program reports if the search word is found in the list.
b. I/P -> read in the list words comma separated from a File and then enter the word
to be searched
c. Logic -> Use Arrays to sort the word list and then do the binary search
d. O/P -> Print the result if the word is found or not

Author Name : Priyanka Gandhi
Date : 27/09/2019
*/

const input = require("./Algoutility")
const fs = require('fs')        //to access readFile function

console.log(readfile());        //function call to read file and perform search function
/*
* paragraph is used to store and access data of file
* singleword array is used to store and access each word in an array to search keyword
* keyword takes the word from the user which needs to be search
* count is used to check whether keyword is present in the file or not
*/
var paragraph; var singleword = []; var keyword;
var count = 0; var sortedstringarray = []
/*
* readfile() performs operation to read data from file
* Reading a keyword from user to search data from file
* Converting data to string and splitting into an individual word
* Sorting data in alphabetical order
* Comparing each word with keyword converting to uppercase
* Returning result by comparing whether keyword is present or not
*/0
function readfile() {
    fs.readFile('InputFile.txt', (err, data) => {       //calling readfile function to access data in file
        paragraph = data.toString()         //data is converted into string to perform string functions
        console.log(paragraph);
        console.log("Enter any keyword to search");
        keyword = input.data.input()        //taking user input for keyword
        keyword = keyword.toLocaleLowerCase()       //All elements are converted to upper case
        singleword = paragraph.split(" ")       //splitting data into singleword to compare with keyword
        // for (i = 0; i <= singleword.length; i++){
        //      singleword[i] = singleword.toLowerCase(singleword[i])
        // }
        sortedstringarray = console.log(insertSort(singleword));        //using insertion sort to sort data alphabetically
        console.log(sortedstringarray);
        
        for (i = 0; i <= singleword.length - 1; i++) {
            if (singleword[i].toLocaleLowerCase() == keyword) {       //each word is converted to upper case and compared with keyword
                count++         //if word is = keyword, counter is incremented
            }
        }
        if (count > 0) {
            console.log("Keyword is present in the file");
        } else {
            console.log("Keyword not found");
        }
    })
}

function insertSort(array) {
    for (i = 0; i <= array.length - 1; i++) {
        for (j = i + 1; j <= array.length; j++) {
            if (array[i] > array[j]) {
                var temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    console.log("Sorted Array: " + array);
}

// var lengthofarray = sortedstringarray.length
        // var midelement = sortedstringarray.lengthofarray/2
        // console.log(midelement);
        
        // for (i = 0; i <= sortedstringarray.length - 1; i++){
        //     if(midelement[i] == keyword){
        //         console.log("Keyword is present in the file");
        //     }else{
        //         if(midelement[i] < keyword){
        //             midelement = midelement[i+1] 
        //         }
        //     }
        // }