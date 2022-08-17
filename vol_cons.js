var Count_Vowels= (S) => 
{
   const count = S.match(/[aeiou]/gi).length;
      return count;
     
};
var Count_Consonants= (S) => 
{
 const count = S.match(/[^aeiou]/gi).length;
      return count;
};