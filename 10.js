const input = require("readline-sync");
let n = input.questionInt("Enter the value: ");
let i = 1;

while (i <= n) 
{
    let j = 1;
    let str = "";
    while (j <= i) 
    {
        str += j;
        j++;
    }
    j -= 2; 
    while (j >= 1)
    {
        str += j;
        j--;
    }
    console.log(str);
    i++;
}
