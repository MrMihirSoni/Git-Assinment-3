// program for check you are Eligible for voting or not 

function vote(age)
{
    if(age >= 18)
    {
        console.log("Your age is",age,", you can vote .")
    }
    else
    {
        console.log("Your age is",age,", you cannot vote .")
    }
}
//Enter your age : --> vote(age)
vote(18);