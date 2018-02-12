function incrementValue()
{
    var value = parseInt(document.getElementById('P').value, 10);


    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('P').value = value;
    }



}
function decrementValue()
{
    var value = parseInt(document.getElementById('P').value, 10);


    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('P').value = value;
    }

}


/*
function clearBox()
{
  document.getElementById('P').innerHTML = "";
	}
}

*/