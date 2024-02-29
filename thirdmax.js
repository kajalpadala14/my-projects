/*Write a program to take 3 numbers from the user and output the second max of 3 numbers.*/
const input = require("readline-sync");
let a = input.questionInt("Enter the value");
let b = input.questionInt("Enter the value");
let c = input.questionInt("Enter the value");
if(a>b)
{
max=a, min=b
} 
else
{
    max= b, min=a
}
if (max>c)
{
max1= max,min1=c
}
else
{
max1=c,min1=max
}
if(min1>min)
{
console.log("second max:",min1);
}else
{
console.log("second max:",min);
}