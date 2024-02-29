/*
2) N=6
* * * * * *
* *
* *
* *
* *
* * * * * *
*/
const input = require("readline-sync");
let n = input.questionInt("Enter the value:")
var i =1;
while (i<=n) 
{
    if(i==1||i==n)
    {
      console.log('* '.repeat(n));
    }
    else
    {
        console.log('* '.repeat(n-4));
    }
    i++;
}