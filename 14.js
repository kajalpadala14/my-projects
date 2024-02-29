/*
N=5
*
* *
* *
* *
* * * * *
*/
const input = require("readline-sync");
let n = input.questionInt("Enter the value:");
var i = 1;
while (i<=n) 
{
    if(i==1||i==n)
    {
      console.log("* ".repeat(i));
    }
    else
    {
        console.log("* ".repeat(n-3));
    }
    i++;
}
