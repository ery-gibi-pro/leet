function fizzbuzz()
{
    let a = 0;
    let fb = [];
    while(a < 101)
    {
        if (a % 5 == 0 && a % 3 == 0)
        {
            //console.log("FizzBuzz");
            fb[a] = "FizzBuzz";
        }
        else if(a % 3 == 0)
        {
            //console.log("fizz");
            fb[a] = "Fizz";
        }
        else if(a % 5 == 0)
        {
            //console.log("buzz");
            fb[a] = "Buzz";
        }
        else
        {
            //console.log(a);
            fb[a] = a;
        }
        a++;
    }
    return(fb)
}

console.log(fizzbuzz())