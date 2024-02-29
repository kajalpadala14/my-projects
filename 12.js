const input = require("readline-sync");
let N = input.questionInt("Enter the value:")
    let i = 1;
   while (i <= N)
     {
        let j = 1;
        let str = '';
        while (j <= 2*i - 1) 
        {
            str += '* ';
            j++;
        }
        console.log(str);
          j-=2;
        while (j>=1) 
       {
        str+=' *';
        j--;
       }
      console.log(str);
      i++;
}


