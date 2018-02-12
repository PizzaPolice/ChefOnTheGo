function incrementValue(id)
{
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
        value++;
            document.getElementById(id).value = value;
    }



}
function decrementValue(id)
{
    var value = parseInt(document.getElementById(id).value, 10);


    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById(id).value = value;
    }

}

function clearBox(id)
{
  document.getElementById(id).innerHTML = ""
  listOfItems = document.getElementsByClassName("item")
}