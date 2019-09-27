var input = require("readline-sync")
console.log("Enter a string")
var str1 = input.question()
console.log(isPalindrome(str1))

function isPalindrome(s1) {
    var s; var e = s1.length - 1;
    var s2 = s1;
    // for (s = 0, e = s1.length-1; s <= e; s++, e--){


    // }
    var s3 = s1.split("")
    console.log(s3);
    var temp
    for (s = 0, e = s3.length - 1; s <= e; s++ , e--) {
        temp = s3[s];
        s3[s] = s3[e];
        s3[e] = temp
    }

    console.log(" Str2 " + s2);
    s3 = s3.join("")
    console.log(" Str3 " + s3);

    if (s2 === s3) {
        console.log("Is Palindrome")
    } else {
        console.log("Not a Palindrome")
    }
    // if(flag == 1){
    //      
    // }else{
    //     
    // }


}






/*
function isPalindrome(s1){
    var e = s1.length-1
    var rev = ""
    for (e = s1.length-1; e >= 0; e--){
        rev += s1.charAt(e)

    }
    console.log(rev)
    if(s1 == rev){
        return "Is Palindrome"
    }else{
        return "Not Palindrome"
    }
}*/
