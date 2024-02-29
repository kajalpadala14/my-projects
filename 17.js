/*
N=4
* * * *
* *
* *
*
* *
* *
* * * *
*/
const input = require("readline-sync");
let n = input.questionInt("Enter the value:");
var i = 1;
while(i<=n)
{
    if(i==1)
      {
        console.log('* '.repeat(n));
      } else if(i==n)
      {
        console.log('*');
      }
      else
      {
        console.log('* '.repeat(n-2));
      }
      i++; 
}     j=2;
      while (j<=n)
{      if(j==n)
        {
          console.log('*'.repeat(n));
        }
        else
        {
          console.log('* '.repeat(n-2));
        }
    
      j++;
}
    
