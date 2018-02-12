//Parse the timer when the timer starts
window.onload = startTime;
//Tick every second, updating the timer each second
window.setInterval(timerTick,1000);

function startTime()
{
  //get the query string from the previous page (or nothing if its empty)
  var queryString = location.search;
  //If it's not empty, then parse it and fill in the required values for the timer
  if (queryString !== "" && queryString !== "?hour=&minute=")
  {
    /* Extract hour and minutes from the query string */
    var splitQuery = queryString.split("&");
    var hour = splitQuery[0].split("=")[1];
    var min = splitQuery[1].split("=")[1];

    /* Set the values in the timer to the given values */
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = "0";

  }
}


/* Ticks every second handling timer changing and time conversion*/
function timerTick() {
  /* Gets the hours, minutes, and seconds left on the timer*/
  var hours = document.getElementById("hours").innerHTML; 
  var mins = document.getElementById("minutes").innerHTML; 
  var seconds = document.getElementById("seconds").innerHTML; 

  /* Decrement seconds every 1000 ms when this func is called*/
  seconds = seconds - 1;

  /* Handle when to remove a minute/hour and add more mins/secs*/
  if (seconds == -1)
  {
    mins = mins - 1;
    seconds = seconds + 60;
  }

  if (mins == -1)
  {
    hours = hours - 1;
    mins = mins + 60;
  }
  /*Check if timer is done (0,0,0) */
  if (hours == -1)
  {
    hours = 0;
    mins = 0;
    seconds = 0;
  }

  /* Update the HTML to display the recalculated times */
  document.getElementById("hours").innerHTML = hours; 
  document.getElementById("minutes").innerHTML = mins; 
  document.getElementById("seconds").innerHTML = seconds; 
} 
