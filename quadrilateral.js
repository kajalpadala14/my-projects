/*Write a program to take four sides of a quadrilateral ABCD in the order AB, BC, CD, DA 
and an internal angle I and Write a program to categorize the shape of a quadrilateral as 
either a square, rhombus, rectangle, parallelogram, or irregular quadrilateral.*/
const input = require("readline-sync");
let AB = input.questionInt( "Enter the side:");
let BC = input.questionInt("Enter the side:");
let  CD = input.questionInt("Enter the side:");
let DA = input. questionInt("Enter the side:");
let I = input.questionInt("Enter the angle:");
if(AB==BC)
{
    if(CD==DA)
    {
        if(I==90)
        {
            console.log("print the  SQUARE");
        }else
        {
            console.log("print the RHOMBUS");
        }
    }
    else 
    {
        console.log("print the irregular ");
    }
}
else if (AB==CD)
{
    if(DA==BC)
    
if(I==90)
   {
      console.log("print the RECTANGLE");
   }
   else
   {
     console.log ("print the PALARALAR");
   }
   else{
    console.log(" print the IRREGULAR");
   }
}
