/*5) N=4
0
2 4
4 8 8
8 16 16 16*/
const input = require("readline-sync");
let n = input.questionInt("Enter the number:");
let i = 1;
let p = 2; 
while (i <= n) 
{
    let str ="";
    let j = 1;
    while (j <= i) 
    {
        if (i == 1) 
        {
             str += "0 ";    
        } else if (j == 1) 
        {
            str+=p+" ";
            p = 2 * p;
        } else 
        {
            str+=p+ " ";
        }
        j++;
    }
    console.log(str );
    i++;
}
