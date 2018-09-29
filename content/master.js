function timerSet()
{
  var timer, userInput = 0;
  do
  {
    userInput = parseInt(prompt("Enter a time (in minutes) between 1 and 30.",""));
    console.log(userInput + " ");
    if (!Number.isInteger(userInput))
    {
      alert("not an integer");
      userInput = 0;
    }
    else if (userInput < 1 || userInput > 30)
    {
      alert ("not in range");
      userInput = 0;
    }
  } while (userInput == 0);
timer = userInput;
console.log("returning timer " + timer);
return timer;
}
