var Count_Occ = (s) => 
{
let count=1;
let str1='';
let value="";
for(let i=0;i<s.length;i++){
for(j=i+1;j<s.length;j++){
if(s[i]==s[j]){
count++;
}
}
if(count>1){
str1=s[i];
value=value+" "+s[i]+count;
s=s.replace(str1,' ');
s=s.split(str1).join('');
}
count=1;
}
return value.split(' ').sort().join(''); 
};