const input = require("./Algoutility")
const fs = require('fs')

console.log(readfile());

var paragraph; var singleword = []; var keyword;
var arrayofelements = []; var count = 0;
function readfile() {
    fs.readFile('InputFile.txt', (err, data) => {
        paragraph = data.toString()
        console.log(paragraph);
        console.log("Enter any keyword to search");
        keyword = input.data.input()
        singleword = paragraph.split(" ")
        // for (i = 0; i <= singleword.length; i++){
        //      singleword[i] = singleword.toLowerCase(singleword[i])
        // }
        sortedstringarray = console.log(insertSort(singleword));
        console.log(sortedstringarray);
        for (i = 0; i <= singleword.length - 1; i++) {
            if (singleword[i].toLowerCase() == keyword) {
                count++
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