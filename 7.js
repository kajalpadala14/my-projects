/*Write a program to print the sum of a given number of terms (N) for a given value of X in the following mathematical series: (Input X and N from the user)

i) X+(X^2)/2+(X^3)/3+(X^4)/4 ....upto N terms*/
/*const input = require("readline-sync");
let n = input.questionInt("Enter the n number:");
let x = input.questionInt("Enter the value:")
i = 1;
sum = 0;
while(i<=n)
{  
  {
  p=(x**i)/i;
  sum =sum+p;
  i++;
  }
}
console.log(sum);*/

/*
ii) X-(X^3)/3+(X^5)/5-(X^7)/7+(X^9)/9-.... Upto N terms
*/

 const input = require("readline-sync");
 let n = input.questionInt("Enter the n number:");
 let x = input.questionInt("enter the value:")
 var i=1;
 var s=0;
 var j=1;
 while (i<=n)
 {

   if( i%2==0)
   {
      p=-(x**j)/j;
   }
   else
   {
      p=(x**j)/j;
   }
    
    s=s+p;
    j=j+2;
    i++;
 }console.log(s);
