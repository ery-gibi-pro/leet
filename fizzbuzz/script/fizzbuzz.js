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

function addPara(a)
{
    let main = document.querySelector("#main");
    let p = document.createElement("p");
    p.textContent = a;
    main.appendChild(p)

   
}
function createFB()
{
    let fb = fizzbuzz();

    for(let i = 0;i<101;i++)
    {
        addPara(fb[i]);
    }
}

createFB();
console.log(fizzbuzz())