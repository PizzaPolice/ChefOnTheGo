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

/*
function calculatePrice()
{
    var localStorage = window.localStorage;

    var q1 = document.getElementById(1).value;
    var q2 = document.getElementById(2).value;
    var q3 = document.getElementById(3).value;

    var prices = document.getElementsByClassName("total-price");

    var finalPrices = q1*prices[0].innerHTML.substring(1) + q2*prices[1].innerHTML.substring(1) + q3*prices[2].innerHTML.substring(1);
    localStorage.setItem("cost", finalPrices+0.00);
}
*/

function listFood()
{
    var localStorage = window.localStorage;
    var dishes = JSON.parse(localStorage.getItem("dishes"));

    if (dishes == null || dishes.length == 0)
    {
        console.log("help");
        return;
    }
    console.log(document.getElementById("checkout_form"));

    for (var i = 0; i < dishes.length; i++)
    {
        var dish = dishes[i];
        var div = document.createElement("div");
        div.setAttribute("class", "item");

        var descriptionDiv = document.createElement("div");
        descriptionDiv.setAttribute("class", "description");
        var descriptionSpan = document.createElement("span");
        descriptionSpan.innerHTML = dish.dish_name;
        descriptionDiv.appendChild(descriptionSpan);

        var quantity = document.createElement("div");
        var container = document.createElement("div");
        var decButton = document.createElement("input");
        decButton.setAttribute("type", "button");
        decButton.setAttribute("onclick", "decrementValue(1)");
        decButton.setAttribute("value", "-");
        var incButton = document.createElement("input");
        incButton.setAttribute("type", "button");
        incButton.setAttribute("onclick", "incrementValue(1)");
        incButton.setAttribute("value", "+");
        var text = document.createElement("input");
        text.setAttribute("type", "text");
        text.setAttribute("name", "quantity");
        text.setAttribute("maxlength", "2");
        text.setAttribute("max", "10");
        text.setAttribute("size", "1");
        text.setAttribute("id", i);
        text.setAttribute("value", "1");
        
        container.appendChild(decButton);
        container.appendChild(text);
        container.appendChild(incButton);
        quantity.appendChild(container);

        div.appendChild(descriptionDiv);
        div.appendChild(quantity);

        document.getElementById("shopping_cart").appendChild(div);
    }
}
listFood();