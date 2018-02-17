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
    if(value >= 1){
        value--;
            document.getElementById(id).value = value;
    }

}

function clearBox(id)
{
  document.getElementById(id).innerHTML = ""
}

function calculatePrice()
{
    var localStorage = window.localStorage;

    var q1 = document.getElementById(1).value;
    var q2 = document.getElementById(2).value;
    var q3 = document.getElementById(3).value;

    var prices = document.getElementsByClassName("total-price");

    var finalPrices = q1*prices[0].innerHTML.substring(1) + q2*prices[1].innerHTML.substring(1) + q3*prices[2].innerHTML.substring(1);
    localStorage.setItem("cost", finalPrices);
}