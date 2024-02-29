const input = require("readline-sync");
let g = input.questionInt(" Enter the mark:");
let c = input.questionInt("Enter the mark:");
let m = input.questionInt("Enter the mark:");
let e = input. questionInt("Enter the mark:");
let h = input.questionInt("Enter the mark:");
{ M=g+c+m+e+h

P =M/500*100
 
}

if(P>=90)
{
    console.log("Grade A");
}
else if (P>=80)

{
    console.log("Grade B");
}
else if( P>=70)
{
    console.log("Grade C");
}
else if(P>=60)
{
    console.log("Grade D");
}
else if (P>=40)
{
    console.log("Grade E");
}
else
{
    console.log("Grade F");
}