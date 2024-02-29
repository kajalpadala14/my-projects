const input = require("readline-sync");
let n = input.questionInt("Enter the value:");
let i = 1;
while (i <= n) 
{  
      let str ='';
        let j = 1;
     while(j<=2*i-1) 
      {
       str +="*  ";
       j++;
    }
    console.log(str);
     i++;
}
