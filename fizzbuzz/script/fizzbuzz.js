function fizzbuzz()
{
    let a = 0;
    while(a < 100)
    {
        if (a % 5 == 0 && a % 3 == 0)
        {
            console.log("FizzBuzz");
        }
        else if(a % 3 == 0)
        {
            console.log("fizz");
        }
        else if(a % 5 == 0)
        {
            console.log("buzz");
        }
        else
        {
            console.log(a)
        }
        a++;
    }
}

fizzbuzz()