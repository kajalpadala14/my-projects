/*Write a program to take two numbers from the user as input and obtain
 the HCF and LCM of the two numbers.*/
const input = require("readline-sync");
let a = input.questionInt("Enter the value:");
let b = input.questionInt("Enter the value:");
if(a>b)
{
    l=a,s=b;
}  
else
{
    l=b,s=a ;
}
{
   R =l%s;
}
while(R!=0)
{
    l=s,s=R;
    R=l%s;

}
HCF=s;
LCM=a*b/HCF;
console.log(LCM,HCF);
