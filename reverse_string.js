var Reverse_String = (str) => 
{
     let st = "";
     for(let i = str.length-1; i >= 0; i--) {
       st += str.charAt(i);
     }
     
     return st;
};