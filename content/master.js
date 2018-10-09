//First timer variables
var active = false;
var min = 0;
var sec = 0;
var userInput;
var min2;
var sec2 = 60;
//second timer variables
var active2 = false;
var min3 = 0;
var sec3 = 0;
var userInput2;
var min4;
var sec4 = 60;
//third timer variables
var active3 = false;
var min5 = 0;
var sec5 = 0;
var userInput3;
var min6;
var sec6 = 60;

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

//Second timer function
function setTimer2(){
    //promt user for number
     userInput2 = parseInt(prompt("Enter a number of minutes from 1 - 30"));
     //added min2 here to be equal to user input so in can be used in the countdown method
     //also add min4 here and min6
     min4 = userInput2;

     //print it into the span object
     document.getElementById("lcdScreen2").innerHTML = userInput2 + " : 0"+sec3;

     //catch if user enters a string instead of a number and if user enters number higher than 30
     if(userInput2 > 30 || isNaN(userInput2)){
        alert("Enter a number from 1 to 30")
        setTimer2();
    }

    // acivates the boolean value to give a greenlight for the count up and down method
    if(userInput2 >= 1 && userInput2 <= 30){
        active2 = true;
    }
}

function count_Up2(){
//checks if user tries to click count up without setting the value tells them to click the set button and enter value
//the \" \" is so that the quotes can be seen in the alert
if ( isNaN(userInput2) && min3 == 0 && sec3 == 0){
    alert("Please click \"Set\" and enter a number from 1 - 30. Then click Count up")
}
//this checks to see if user input equals the minutes then it will reset min and seconds to 0 and stop the loop and 
//have the button set, count up and down become usable again
if(min3 == userInput2){
active2 = false;
document.getElementById("lcdScreen2").innerHTML = min3+" : 0" + sec3;
document.getElementById("lcdScreen2").innerHTML = "Timer Done!"
sec3 = 0;
min3 = 0;
//enable set, count up and down button
document.getElementById("Set2").disabled = false;
document.getElementById("countUp2").disabled = false;
document.getElementById("countDown2").disabled = false;
}
//this is the counter once active it goes in a loop incrementing the seconds every time we loop the count up function by 
// 1000miliseconds or 1 second  

if(active2){

//disable the set count up and down buttons while the loop is occuring
//otherwise the user could keep clicking them and ultimately causing the function to run more than once
//its bad Disable the BUTTONS!!!
document.getElementById("Set2").disabled = true;
document.getElementById("countUp2").disabled = true;
document.getElementById("countDown2").disabled = true;

//increments the seconds
sec3++;
    
//this adds a zero infront of numbers 1 - 9 
    if(sec3 < 10){
        document.getElementById("lcdScreen2").innerHTML = min3+" : 0" + sec3;
    }else document.getElementById("lcdScreen2").innerHTML = min3+" : " + sec3;

//this is what runs the count up function which is incrementing the seconds every 1000 milisecons
//(every 1 second) add 1 to sec is whats going on when setTimeout(count_up <- function name,1000<-amount of miliseconds to delay)
        setTimeout(count_Up2,1000);
    
        //this detects when its been a full minute then resets seconds to zero and increments minute and outputs it
        //i decided to output the string again because if you just do sec=0 and min++ 
        //it will at not go 1:00 it will go 1:01 
        //thats also why i made sec = 59 instead of 60 because the 1 sec delay will make it a min at 1:00
        if(sec3 == 59){
        sec3 = 0;
        min3++;
        document.getElementById("lcdScreen2").innerHTML = min3+" : 0" + sec3;
        }
}
}


function count_Down2(){
//checks if user tries to click count up without setting the value tells them to click the set button and enter value
//the \" \" is so that the quotes can be seen in the alert
if ( isNaN(min4)){
    alert("Please click \"Set\" and enter a number from 1 - 30. Then click Count up")
}
//this checks to see if user input equals the minutes then it will reset seconds to 60 and stop the loop and 
//have the button set, count up and down become usable again
if(min4 == 0 && sec4 == 1){
active2 = false;
document.getElementById("lcdScreen2").innerHTML = min4+" : 0" + sec4;
document.getElementById("lcdScreen2").innerHTML = "Timer Done!"
sec4 = 60;
//enable set, count up and down button
document.getElementById("Set2").disabled = false;
document.getElementById("countUp2").disabled = false;
document.getElementById("countDown2").disabled = false;
}

//this is the counter once active it goes in a loop incrementing the seconds every time we loop the count up function by 
// 1000miliseconds or 1 second  
if(active2){

//disable the set count up and down buttons while the loop is occuring
//otherwise the user could keep clicking them and ultimately causing the function to run more than once
//its bad Disable the BUTTONS!!!
document.getElementById("Set2").disabled = true;
document.getElementById("countUp2").disabled = true;
document.getElementById("countDown2").disabled = true;

if(sec4 == 60){
    min4--;

}

//decrements the seconds
sec4--;
    
//this adds a zero infront of numbers 1 - 9 
    if(sec4 < 10){
        document.getElementById("lcdScreen2").innerHTML = min4+" : 0" + sec4;
    }else document.getElementById("lcdScreen2").innerHTML = min4+" : " + sec4;

//this is what runs the count up function which is incrementing the seconds every 1000 milisecons
//(every 1 second) add 1 to sec is whats going on when setTimeout(count_up <- function name,1000<-amount of miliseconds to delay)
        setTimeout(count_Down2,1000);
    
        //this detects when its been a full minute then resets seconds to 60 and decrements minute and outputs it
        if(sec4 == 0){
        sec4 = 60;
        
        document.getElementById("lcdScreen2").innerHTML = min4+" : 0" + sec4;
        }

}

    
}

function Stop2(){

//this stops the loop by turning the boolean false
//resetting the values and displaying 0 : 00
//only thing to add is min3 and sec3, sec4, min5 and sec5, sec6
active2 = false;
min3 = 0;
sec3 = 0;
sec4 = 60;

document.getElementById("lcdScreen2").innerHTML = min3+" : 0"+sec3;

//enable set, count up and down button
document.getElementById("Set2").disabled = false;
document.getElementById("countUp2").disabled = false;
document.getElementById("countDown2").disabled = false;
}

//Third timer functions
function setTimer3(){
    //promt user for number
     userInput3 = parseInt(prompt("Enter a number of minutes from 1 - 30"));
     //added min2 here to be equal to user input so in can be used in the countdown method
     //also add min4 here and min6
     min6 = userInput3;

     //print it into the span object
     document.getElementById("lcdScreen3").innerHTML = userInput3 + " : 0"+sec5;

     //catch if user enters a string instead of a number and if user enters number higher than 30
     if(userInput3 > 30 || isNaN(userInput3)){
        alert("Enter a number from 1 to 30")
        setTimer3();
    }

    // acivates the boolean value to give a greenlight for the count up and down method
    if(userInput3 >= 1 && userInput3 <= 30){
        active3 = true;
    }
}

function count_Up3(){
//checks if user tries to click count up without setting the value tells them to click the set button and enter value
//the \" \" is so that the quotes can be seen in the alert
if ( isNaN(userInput3) && min5 == 0 && sec5 == 0){
    alert("Please click \"Set\" and enter a number from 1 - 30. Then click Count up")
}
//this checks to see if user input equals the minutes then it will reset min and seconds to 0 and stop the loop and 
//have the button set, count up and down become usable again
if(min5 == userInput3){
active3 = false;
document.getElementById("lcdScreen3").innerHTML = min5+" : 0" + sec5;
document.getElementById("lcdScreen3").innerHTML = "Timer Done!"
sec5 = 0;
min5 = 0;
//enable set, count up and down button
document.getElementById("Set3").disabled = false;
document.getElementById("countUp3").disabled = false;
document.getElementById("countDown3").disabled = false;
}
//this is the counter once active it goes in a loop incrementing the seconds every time we loop the count up function by 
// 1000miliseconds or 1 second  

if(active3){

//disable the set count up and down buttons while the loop is occuring
//otherwise the user could keep clicking them and ultimately causing the function to run more than once
//its bad Disable the BUTTONS!!!
document.getElementById("Set3").disabled = true;
document.getElementById("countUp3").disabled = true;
document.getElementById("countDown3").disabled = true;

//increments the seconds
sec5++;
    
//this adds a zero infront of numbers 1 - 9 
    if(sec5 < 10){
        document.getElementById("lcdScreen3").innerHTML = min5+" : 0" + sec5;
    }else document.getElementById("lcdScreen3").innerHTML = min5+" : " + sec5;

//this is what runs the count up function which is incrementing the seconds every 1000 milisecons
//(every 1 second) add 1 to sec is whats going on when setTimeout(count_up <- function name,1000<-amount of miliseconds to delay)
        setTimeout(count_Up3,1000);
    
        //this detects when its been a full minute then resets seconds to zero and increments minute and outputs it
        //i decided to output the string again because if you just do sec=0 and min++ 
        //it will at not go 1:00 it will go 1:01 
        //thats also why i made sec = 59 instead of 60 because the 1 sec delay will make it a min at 1:00
        if(sec5 == 59){
        sec5 = 0;
        min5++;
        document.getElementById("lcdScreen3").innerHTML = min5+" : 0" + sec5;
        }
}
}


function count_Down3(){
//checks if user tries to click count up without setting the value tells them to click the set button and enter value
//the \" \" is so that the quotes can be seen in the alert
if ( isNaN(min6)){
    alert("Please click \"Set\" and enter a number from 1 - 30. Then click Count up")
}
//this checks to see if user input equals the minutes then it will reset seconds to 60 and stop the loop and 
//have the button set, count up and down become usable again
if(min6 == 0 && sec6 == 1){
active3 = false;
document.getElementById("lcdScreen3").innerHTML = min6+" : 0" + sec6;
document.getElementById("lcdScreen3").innerHTML = "Timer Done!"
sec6 = 60;
//enable set, count up and down button
document.getElementById("Set3").disabled = false;
document.getElementById("countUp3").disabled = false;
document.getElementById("countDown3").disabled = false;
}

//this is the counter once active it goes in a loop incrementing the seconds every time we loop the count up function by 
// 1000miliseconds or 1 second  
if(active3){

//disable the set count up and down buttons while the loop is occuring
//otherwise the user could keep clicking them and ultimately causing the function to run more than once
//its bad Disable the BUTTONS!!!
document.getElementById("Set3").disabled = true;
document.getElementById("countUp3").disabled = true;
document.getElementById("countDown3").disabled = true;

if(sec6 == 60){
    min6--;
}

//decrements the seconds
sec6--;
    
//this adds a zero infront of numbers 1 - 9 
    if(sec6 < 10){
        document.getElementById("lcdScreen3").innerHTML = min6+" : 0" + sec6;
    }else document.getElementById("lcdScreen3").innerHTML = min6+" : " + sec6;

//this is what runs the count up function which is incrementing the seconds every 1000 milisecons
//(every 1 second) add 1 to sec is whats going on when setTimeout(count_up <- function name,1000<-amount of miliseconds to delay)
        setTimeout(count_Down3,1000);
    
        //this detects when its been a full minute then resets seconds to 60 and decrements minute and outputs it
        if(sec6 == 0){
        sec6 = 60;
        
        document.getElementById("lcdScreen3").innerHTML = min6+" : 0" + sec6;
        }

}

    
}

function Stop3(){

//this stops the loop by turning the boolean false
//resetting the values and displaying 0 : 00
//only thing to add is min3 and sec3, sec4, min5 and sec5, sec6
active3 = false;
min5 = 0;
sec5 = 0;
sec6 = 60;

document.getElementById("lcdScreen3").innerHTML = min5+" : 0"+sec5;

//enable set, count up and down button
document.getElementById("Set3").disabled = false;
document.getElementById("countUp3").disabled = false;
document.getElementById("countDown3").disabled = false;
}

