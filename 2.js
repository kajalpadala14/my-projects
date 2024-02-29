const input = require("readline-sync");
let N = input.questionInt("Enter the value:");
let sum =0;
let originalN= N;

let R ;

while (N>0){
R = N%10;
sum = sum*10+R;
N = Math.floor( N/10);
}
 if(originalN===sum)
{

    console.log(" This is  a palindrome ");
}
else{
    console.log(" This is not a palindrome ");
}