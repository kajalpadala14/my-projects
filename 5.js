/*Write a program to take N numbers from a user as input, and print the maximum and minimum values among the given set 
of N numbers. Also, take N from the user as input.*/
const input = require("readline-sync")
let n = input. questionInt("Enter the n number:");
let a = input.questionInt("Enter a number:");
let max = a;
let min = a;
i = 2; 
while(i<=n)
{
    let b= input.questionInt("Enter the number:");
    if(b>max)
    {
      max=b;
    }
    if(b<min) 
    {
      min =b;
    } 
    i++;
}
console.log(max + " is max");
console.log(min + " is min");
    