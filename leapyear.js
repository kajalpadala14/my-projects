/*Write a program to take a year from the user and output whether a given year is a leap year or not.*/
const input = require("readline-sync");
let Y  = input.questionInt("Enter the year:");
if(Y%100===0)
{
    if(Y%400===0)
    {
        console.log("This year is a leap year:"+Y)
    }
    else
    {
        console.log("This is not a leap year:"+Y);
    }
}
else if(Y%4===0)
{
    console.log("This year is a leap year:"+Y);
}
else
{
    console.log("This is not a leap year:"+Y);
}