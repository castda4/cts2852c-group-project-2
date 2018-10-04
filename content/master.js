var active = false;
var min = 0;
var sec = 0;
var userInput;
var min2;
var sec2 = 60;
//add a min3 make it = to 0 min 3 will be used for the count up on timer 2

//add a sec3 make it = to 0 min 3 will be used for the count up on timer 2

//add a min4 make undefined min 3 will be used for the count down on timer 2

//add a sec4 make it = to 0 min 3 will be used for the count down on timer 2
    function setTimer(){
        //promt user for number
         userInput = parseInt(prompt("Enter a number of minutes from 1 - 30"));
         //added min2 here to be equal to user input so in can be used in the countdown method
         //also add min4 here and min6
         min2 = userInput;

         //print it into the span object
         document.getElementById("lcdScreen").innerHTML = userInput + " : 0"+sec;

         //catch if user enters a string instead of a number and if user enters number higher than 30
         if(userInput > 30 || isNaN(userInput)){
            alert("Enter a number from 1 to 30")
            setTimer();
        }
    
        // acivates the boolean value to give a greenlight for the count up and down method
        if(userInput >= 1 && userInput <= 30){
            active = true;
        }
    }

function count_Up(){
    //checks if user tries to click count up without setting the value tells them to click the set button and enter value
    //the \" \" is so that the quotes can be seen in the alert
    if ( isNaN(userInput) && min == 0 && sec == 0){
        alert("Please click \"Set\" and enter a number from 1 - 30. Then click Count up")
    }
    //this checks to see if user input equals the minutes then it will reset min and seconds to 0 and stop the loop and 
    //have the button set, count up and down become usable again
if(min == userInput){
    active = false;
    document.getElementById("lcdScreen").innerHTML = min+" : 0" + sec;
    document.getElementById("lcdScreen").innerHTML = "Timer Done!"
    sec = 0;
    min = 0;
    //enable set, count up and down button
    document.getElementById("Set").disabled = false;
    document.getElementById("countUp").disabled = false;
    document.getElementById("countDown").disabled = false;
    }
    //this is the counter once active it goes in a loop incrementing the seconds every time we loop the count up function by 
    // 1000miliseconds or 1 second  
    
if(active){

    //disable the set count up and down buttons while the loop is occuring
    //otherwise the user could keep clicking them and ultimately causing the function to run more than once
    //its bad Disable the BUTTONS!!!
    document.getElementById("Set").disabled = true;
    document.getElementById("countUp").disabled = true;
    document.getElementById("countDown").disabled = true;

    //increments the seconds
    sec++;
        
    //this adds a zero infront of numbers 1 - 9 
        if(sec < 10){
            document.getElementById("lcdScreen").innerHTML = min+" : 0" + sec;
        }else document.getElementById("lcdScreen").innerHTML = min+" : " + sec;

//this is what runs the count up function which is incrementing the seconds every 1000 milisecons
//(every 1 second) add 1 to sec is whats going on when setTimeout(count_up <- function name,1000<-amount of miliseconds to delay)
            setTimeout(count_Up,1000);
        
            //this detects when its been a full minute then resets seconds to zero and increments minute and outputs it
            //i decided to output the string again because if you just do sec=0 and min++ 
            //it will at not go 1:00 it will go 1:01 
            //thats also why i made sec = 59 instead of 60 because the 1 sec delay will make it a min at 1:00
            if(sec == 59){
            sec = 0;
            min++;
            document.getElementById("lcdScreen").innerHTML = min+" : 0" + sec;
            }

    }

    
}


function count_Down(){
//checks if user tries to click count up without setting the value tells them to click the set button and enter value
    //the \" \" is so that the quotes can be seen in the alert
    if ( isNaN(min2)){
        alert("Please click \"Set\" and enter a number from 1 - 30. Then click Count up")
    }
    //this checks to see if user input equals the minutes then it will reset seconds to 60 and stop the loop and 
    //have the button set, count up and down become usable again
if(min2 == 0 && sec2 == 1){
    active = false;
    document.getElementById("lcdScreen").innerHTML = min2+" : 0" + sec;
    document.getElementById("lcdScreen").innerHTML = "Timer Done!"
    sec2 = 60;
    //enable set, count up and down button
    document.getElementById("Set").disabled = false;
    document.getElementById("countUp").disabled = false;
    document.getElementById("countDown").disabled = false;
    }

    //this is the counter once active it goes in a loop incrementing the seconds every time we loop the count up function by 
    // 1000miliseconds or 1 second  
if(active){

    //disable the set count up and down buttons while the loop is occuring
    //otherwise the user could keep clicking them and ultimately causing the function to run more than once
    //its bad Disable the BUTTONS!!!
    document.getElementById("Set").disabled = true;
    document.getElementById("countUp").disabled = true;
    document.getElementById("countDown").disabled = true;

    if(sec2 == 60){
        min2--;

    }

    //decrements the seconds
    sec2--;
        
    //this adds a zero infront of numbers 1 - 9 
        if(sec2 < 10){
            document.getElementById("lcdScreen").innerHTML = min2+" : 0" + sec2;
        }else document.getElementById("lcdScreen").innerHTML = min2+" : " + sec2;

//this is what runs the count up function which is incrementing the seconds every 1000 milisecons
//(every 1 second) add 1 to sec is whats going on when setTimeout(count_up <- function name,1000<-amount of miliseconds to delay)
            setTimeout(count_Down,1000);
        
            //this detects when its been a full minute then resets seconds to 60 and decrements minute and outputs it
            if(sec2 == 0){
            sec2 = 60;
            
            document.getElementById("lcdScreen").innerHTML = min2+" : 0" + sec2;
            }

    }

        
}

function Stop(){

    //this stops the loop by turning the boolean false
    //resetting the values and displaying 0 : 00
    //only thing to add is min3 and sec3, sec4, min5 and sec5, sec6
active = false;
min = 0;
sec = 0;
sec2 = 60;

document.getElementById("lcdScreen").innerHTML = min+" : 0"+sec;

//enable set, count up and down button
document.getElementById("Set").disabled = false;
document.getElementById("countUp").disabled = false;
document.getElementById("countDown").disabled = false;
}

//create new functions count_Down2, count_Up2, count_Down3, count_Up3