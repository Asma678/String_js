var Game_Winner = (S) => 
{
   let Count1 = 0, Count2 = 0;
   
  for(let i=0; i<S.length; i++){
    if(S.charAt(i) == 'A'){
      Count1 += 1
    }
    if(S.charAt(i)=='D'){
      Count2 += 1
    }
  }
  if(Count1 > Count2){
    return 'Aditya'
  }
  else if(Count1 < Count2){
    return 'Danish'
  }
  else{
    return 'Draw'
  }
}