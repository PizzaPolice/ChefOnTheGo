function validateTime()
{
  //Get the hour and min inputted
  var hour = document.forms["timeinput"]["hour"].value;
  var min = document.forms["timeinput"]["minute"].value;

  //Sanity checking
  if (hour < 0 || min < 0)
  {
    window.alert("Error: Please make sure time is valid");
    return false;
  }

}
