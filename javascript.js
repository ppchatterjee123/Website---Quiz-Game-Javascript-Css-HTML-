 var playing = false;
    var score;
var action;
var timeremaining;
//startreset button - if we are playing - reload page
document.getElementById("startreset").onclick = function () {
    //if we are playing 
    if (playing == true) {
        //reload page
        location.reload();
    }
    else{
        playing = true;
        score = 0;
        document.getElementById("value").innerHTML = score;
        
        document.getElementById("timeremaining").style.display = "block";
        
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        //change button to reset
        
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        //start countdown
        
        startCountDown();
    }
}

                   //    if not playing - then take actions

            // set score to 0
                    //  show countdown box
                    // also reduce time by 1 sec in loops
                    // time left - continue 
                    // else Game over
                // change button to reset
                // Generate new question and multiple answer


// if we click on answer box-
    // if we are palying 
            // correct ?
                // yes
                    // increase score by 1
                        // show correct box for 1 second        
                            // also generate new Q&A
                // no
                    // try again box for 1 sec

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
    },1000);
}



