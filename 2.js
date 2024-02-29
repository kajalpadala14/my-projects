/*Write a program to take four numbers from the user and print the greater number of the four numbers. */
const input = require("readline-sync");
let a = input.questionInt("Enter the first value:");
let b = input.questionInt("Enter the second value:");
let c = input.questionInt("Enter the third value:");
let d = input. questionInt("Enter the fourth value:");
if(a>b && a>c && a>d)
{
    console.log("Greatest number is :",a);
}
else if(b>a && b>c && b>d)
{
    console.log("Greatest number is :",b)
}
else if (c>a && c>b && c>d)
{
    console.log("Greatest number is :",c)
}
else
{
    console.log( "Greatest number is :",d)
}
