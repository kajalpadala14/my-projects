/*Write a program to check if a number is a special type of number called a 'prime number'.
 A prime number is a number that is only divisible by 1 and itself and it doesn't have any other factors.*/
 const input = require("readline-sync");
 let n = input.question("Enter the value:");
 let a = 1;
 let s = 0;
 while (a<=n)
 {
    if(n%a!=0);
    else
{
      s = s+1
}
{
    a = a +1
 }
 }
  

 if(s==2)
{
    console.log("yes it's a prime number");
} 
else
{
console.log("no not a prime number");
} 