const input = require("./Algoutility")
var num = input.data.input()
// console.log(num)

var arr = input.data.primerange(num)

/*function primeRange(n){
    //var i = 2;
    /*if(n % i == 0){
        console.log("2")
    }*/
/*var arr=[]
    for (i = 1; i <= n; i++){
       var count =0;
        for (j = 2; j <= i/2 ; j++){
            if (i % j == 0){
                count++
                  
            }
        }
           
        if(count == 0){
            console.log(i)
            arr.push(i)
        }  
    }
    console.log("Prime Numbers: "+JSON.stringify(arr))
    return arr;
}
*/

console.log("Prime Numbers: " + JSON.stringify(arr))