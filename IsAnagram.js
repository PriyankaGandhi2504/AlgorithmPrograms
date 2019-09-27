const input = require("./Algoutility")
console.log("Enter 2 Strings")          //asking user to enter 2 string inputs
var str1 = input.data.input()           //reading data from user
var str2 = input.data.input()           //reading data from user
console.log(isAnagram(str1, str2))      //calling isAnagram() function with 2 string parameter and displaying output

function isAnagram(s1, s2){
    var i; var j;
    var flag = 0;                       
    if(s1.length == s2.length){         //comparing length of strings
        console.log("Strings are of same length")
        for (i = 0; i < s1.length; i++){
            for (j = 0; j < s2.length; j++){
                if(s1[i] == s2[j]){
                    flag = 1;           //setting flag = 1 if characters are same
                }else{
                    flag = 0;           
                }
            }
        }    
    } else {
        console.log("Strings are not of equal length")    //display if strings are not of equal length
    }
    if(flag == 1){
        return "Is Anagram"             //after checking both strings if flag = 1, then it is an Anagram
    }else{
        return "Is Not Anagram"
    }
    
}