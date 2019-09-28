/*3. Extend the above program to find the prime numbers that are Anagram and
Palindrome

Author Name : Priyanka Gandhi
Date : 26/09/2019
*/

const input = require("./Algoutility")
const num = require("readline-sync")
console.log("Please enter range of Prime Numbers to be calculated: ");
var number = num.questionInt()
var arr = input.data.primerange(number)        //calling a function to get prime numbers and storing in an array
console.log("Prime Numbers are: " + JSON.stringify(arr));       //Printing the array converting into the string
arr = arr.toString()        //converting an array into string to use string functions
arr = arr.split(",")        // splitting an array by ","
var palindromearray = []       // an array to store palindrome numbers from prime number array
/*
* traversing an array from 0 to length
* And each element is checked whether it is a palindrome 
* A function isPalindrome is called and an array is passed as a parameter
*/
for (i = 0; i <= arr.length - 1; i++) {
    var palindromearray = input.data.isPalindrome(arr[i])       
}
console.log("Palindrome Numbers are: " + JSON.stringify(palindromearray)) //displaying palindrome numbers from array
console.log(isAnagram(palindromearray));        //palindrome array is passed to anagram function to get anagram elements from array
/*
* Function to check whether the array has anagram numbers
*/
function isAnagram(palindromearray) {
    var i ; var j; var flag = 0;
    for (i = 0; i < palindromearray.length; i++) {      //In this loop "i" is pointing to the 1st element of array
        for (j = i+1; j < palindromearray.length; j++) {    //"j" is traversing from 1st position to the last
            for(k= i[0]; k < i.length; k++){        //Every elements length is calculated to check sequence
                for (l = j[0]; l < j.length; l++){      //this loop will traverse to each element to compare
                    if (arr[i] == arr1[j]) {        //check whether elements are same
                        flag = 1
                    }
                }
            }           
        }
    }
    if (flag == 1){
        return (i + j + "Is Anagram")             //after checking both strings if flag = 1, then it is an Anagram
    }else{
        return "No Anagrams found"
    }
}





/*
function isPalindrome(n){
    var i; var j;
    var PalindromeArray = []
    if(n >= 2){

        var n = JSON.stringify(n)
        var n1 = n                  //Original Number
        var n2 = n.split("")
        for (i = 0, j = n2.length-1; i <= j; i++, j--){
            var temp = n2[i];
            n2[i] = n2[j]
            n2[j] = temp
        }
        n2 = n2.join("")
        console.log(n2);
        console.log("Original Number: " + n1);
        console.log("Reversed Number: " + n2);

        if (n1 == n2){
            console.log("Is Palindrome" + n1);
            PalindromeArray.push(n1)
        }else{
            console.log("Not Palindrome");

        }
    }

}
*/

// var palindrome = input.data.isPalindrome(arr)
// console.log(palindrome)
// console.log(primeRange(num))

// function primeRange(n)
// {
    //var i = 2;
/*if(n % i == 0){
    console.log("2")
}*/
//var arr=[]
    // var num; 
    // for (i = 2; i <= n; i++){
    //    var count =0;
    //     for (j = 2; j <= i/2 ; j++){
    //         if (i % j == 0){
    //             count++

    //         }
    //     }

    //     if(count == 0){
    //        console.log(i)
    //        //no = i

    //        console.log(isPalindrome(i))
    //     //    while(i > 0){
    //     //        var rem = i % 10
    //     //        var rev = (sum * 10) + rem
    //     //        var i = i/10
    //     //        console.log(rev)
    //     //    }
    //     //    if(no == rev){
    //     //        console.log("Num : " +i)
    //     //    }
    //     }


    //     }  
    // }
    //console.log(isPalindrome(i))




// function isPalindrome(no){
//     var sum = 0; var no;
//     while(no > 0){
//                var rem = no % 10
//                var rev = (sum * 10) + rem
//                var no = no/10
//                console.log(rev)
//            }
//            if(no == rev){
//                console.log("Num : " + no+" Rev"+ rev)
//            }
// }


//console.log(isAnagram(arr))
/*
function isPalindrome(n){
    var i; var j;
    for (i = 0; i <= n.length-1; i++){
        console.log("Current Value of i: " +i)
        if(n.length >= 2){
            for(j = n.length-1; j >= 0; j--){
                if(i == j){
                    return i
                }else{
                    return "Not a Palindrome"
                }
            }
        }
    }
}
*/



/*
function isPalindrome(arr1){
    var i; var j; var k;
    for (i = 0; i <= arr1.length-1; i++){
        if(arr1[i].length >= 2){
            for(j = 0; j <= arr1[i].length-1; j++){
                for(k = arr1[i].length-1; k >= j; k--){
                    console.log()
                    if(arr1[j] == arr1[k]){
                        return "Is Palindrome"
                    }else{
                        return "Not a Palindrome"
                    }
                }
            }
        }
    }
}
*/




/*
function isAnagram(arr1){
    var i = arr1[0]
    var j = arr1[1]
    for(i = arr1[0]; i <= arr1.length-1; i++){
        for(j = arr1[1]; j <= arr1.length-1; j++){
            if(arr1[i] == arr1[j]){
                console.log(j)
            }
        }
    }
}
*/







// var arr1=[]; arr1= arr;
// console.log(arr1)
// var ana = input.data.isAnagram(arr,arr1)
// console.log(ana)
/*

var i = arr; var j = arr1;
for(i = arr[0]; i < arr.length; i++){
    for(j = arr[0]; j < arr1.length; j++){
        if(arr[i] == arr1[j]){
            var ana = input.data.isAnagram(arr[i],arr1[j])
        }
    }
}
console.log(ana)*/