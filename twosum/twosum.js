//alert("test")
let s = [3,3,3];

let i = 0;
let j = 0;

let a
let t = 6;
let answer_found = 0;
while(i < s.length)
{
    //console.log(s[i]+s[i+1]);
    while(j < s.length && answer_found == 0)
    {
        //console.log(s[j]);
       a=s[i]+s[j]
        //console.log(i)
        //console.log(j)
       // console.log(a)

       if(a == t && i != j)
       {
        console.log(i)
        console.log(j)
        answer_found = 1;
        break;
       }

       //console.log("why")
        //console.log(a)
        j++;
    }
   
    //console.log(i)
    j = 0;
    i++;
}