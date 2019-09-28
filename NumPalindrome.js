var input = require("readline-sync")
console.log("Enter any Number: ");
var num = input.questionInt()
console.log(numPalindrome(num))
/*
* Function to check whether number is palindrome or not
*/
function numPalindrome(n) {
    var i; var j;
    n = JSON.stringify(n)       //number n is converted to string to get split and compare
    var n1 = n
    var n2 = n.split("")
    for (i = 0, j = n2.length - 1; i <= j; i++ , j--) {  //reversing a number by swapping positions
        var temp = n2[i];
        n2[i] = n2[j]
        n2[j] = temp
    }
    n2 = n2.join("")        //to join all the elements back to a number
    console.log("Original Number: " + parseInt(n1));
    console.log("Reversed Number: " + parseInt(n2));

    if (n1 == n2) {         //comparing original number with reversed
        console.log("Is Palindrome");       //If true, it will display "Is Palindrome"
    } else {
        console.log("Not Palindrome");      //If false, it will display "Not Palindrome"

    }
}






/*
function numPalindrome(no){
    //var PalindromeArray = [];
    var n1 = no
    var rev = 0; var rem;
    console.log("Original Number: " + n1);

for(let i = 0; i <= no.length-1; i++){
    while(no > 0){

        rem =no % 10
        no = parseInt(no/10)
        rev = (rev * 10) + rem
    }
    console.log("Reversed Number: " + rev)
    if(no == rev){
        console.log("Is Palindrome")
       // PalindromeArray.push(no)
    }
}
//return PalindromeArray;
}
*/






    // for (i = 0, j=n.length; i <= j; i++, j--){    
    //     if(i <= j){
    //         console.log("Is Palindrome") 
    //     }else{
    //         console.log("Not a Palindrome")
    //     }
    // }
//}